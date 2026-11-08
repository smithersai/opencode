
/** @throws {never} */
export function cancel(timer: ReturnType<typeof setTimeout> | undefined) { clearTimeout(timer) }

export function later(callback: Parameters<typeof setTimeout>[0], milliseconds: number) { return setTimeout(callback, milliseconds) }

export function randomID() { return crypto.randomUUID() }

import { gzipSync, gunzipSync } from "node:zlib"
/** @throws {never} */

export function now() { return performance.now() }

export function textBytes(value: string) { return Buffer.from(value) }

export function encodedBytes(value: string, encoding: BufferEncoding) { return Buffer.from(value, encoding) }

export function fileBytes(value: Uint8Array) { return Buffer.from(value) }

export function concat(chunks: readonly Uint8Array[]) { return Buffer.concat(chunks) }

export function compress(value: Parameters<typeof gzipSync>[0]) { return gzipSync(value) }

export function decompress(value: Uint8Array, options: Parameters<typeof gunzipSync>[1]) { return gunzipSync(value, options) }
