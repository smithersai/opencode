// The platform code of proxy.vibe: the Node HTTP server, its sockets and buffers, which VibeLang code does not use
// directly (EK4402).

import { randomBytes, timingSafeEqual } from "node:crypto"
import {
  Agent,
  createServer,
  request,
  type AgentOptions,
  type IncomingMessage,
  type RequestListener,
  type RequestOptions,
  type ServerOptions,
} from "node:http"
import { Duplex } from "node:stream"
import type { Transport } from "./proxy.vibe"
import { Browser } from "./rpc.vibe"

const platformRandomBytes = (size: number) => randomBytes(size)
const platformTimingSafeEqual = (a: NodeJS.ArrayBufferView, b: NodeJS.ArrayBufferView) => timingSafeEqual(a, b)
const platformCreateServer = (options: ServerOptions, listener: RequestListener) => createServer(options, listener)
const platformRequest = (options: RequestOptions, callback: (response: IncomingMessage) => void) =>
  request(options, callback)

export {
  platformRandomBytes as randomBytes,
  platformTimingSafeEqual as timingSafeEqual,
  platformCreateServer as createServer,
  platformRequest as request,
}

export const createAgent = (options: AgentOptions) => new Agent(options)

export const bufferFrom = (value: string) => Buffer.from(value)

export const toBase64 = (value: string) => Buffer.from(value).toString("base64")

export class TunnelSocket extends Duplex {
  readonly connecting = false
  private readonly abort = new AbortController()
  private pending = false

  constructor(
    private readonly transport: Transport,
    private readonly id: string,
  ) {
    super({ highWaterMark: Browser.TUNNEL_CHUNK_BYTES, allowHalfOpen: true })
    this.on("error", () => this.destroy())
  }
  override _read() {
    if (this.pending || this.destroyed) return
    this.pending = true
    void this.transport.read(this.id, this.abort.signal).then(
      (result) => {
        this.pending = false
        if (this.destroyed) return
        if (result.eof) {
          this.push(null)
          return
        }
        if (this.push(result.data)) this._read()
      },
      (error: unknown) => this.destroy(asError(error)),
    )
  }
  override _write(chunk: Buffer | string, encoding: BufferEncoding, callback: (error?: Error | null) => void) {
    const data = typeof chunk === "string" ? Buffer.from(chunk, encoding) : chunk
    void (async () => {
      for (let offset = 0; offset < data.byteLength; offset += Browser.TUNNEL_CHUNK_BYTES)
        await this.transport.write(
          this.id,
          data.subarray(offset, offset + Browser.TUNNEL_CHUNK_BYTES),
          false,
          this.abort.signal,
        )
    })().then(
      () => callback(),
      (error: unknown) => callback(asError(error)),
    )
  }
  override _final(callback: (error?: Error | null) => void) {
    void this.transport.write(this.id, new Uint8Array(), true, this.abort.signal).then(
      () => callback(),
      (error: unknown) => callback(asError(error)),
    )
  }
  override _destroy(error: Error | null, callback: (error?: Error | null) => void) {
    this.abort.abort()
    void this.transport
      .close(this.id)
      .catch(() => undefined)
      .then(() => callback(error))
  }
  setKeepAlive() {
    return this
  }
  setNoDelay() {
    return this
  }
  setTimeout(_timeout: number, callback?: () => void) {
    if (callback) this.once("timeout", callback)
    return this
  }
  ref() {
    return this
  }
  unref() {
    return this
  }
}

function asError(error: unknown) {
  return error instanceof Error ? error : new Error(String(error))
}
