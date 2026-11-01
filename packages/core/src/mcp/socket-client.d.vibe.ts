export * as McpSocketClient from "./socket-client.vibe";
import { type Transport } from "@modelcontextprotocol/client";
/** The side of an incoming WebSocket the transport writes to. */
export interface Socket {
    readonly send: (text: string) => void;
    readonly close: (code?: number, reason?: string) => void;
}
export interface SocketTransport extends Transport {
    /** Feeds one inbound text frame. */
    readonly deliver: (text: string) => void;
    /** Reports that the socket closed; fires `onclose` once. */
    readonly ended: () => void;
}
/**
 * MCP client transport over a WebSocket that a client app opened to the server. The app runs the
 * MCP server and opencode runs the MCP client, so only the connection direction is inverted: the
 * transport is only ever made for an incoming socket and never dials out.
 *
 * Framing: one JSON-RPC 2.0 message per text frame, JSON-encoded, without batching. A frame that is
 * not valid JSON or not a JSON-RPC message is reported through `onerror` and the connection stays
 * open. Frames that arrive before `start()` are buffered and delivered on start.
 *
 * Closing: `close()` closes the socket with 1000 (normal). The transport learns that the socket
 * closed for any other reason through `ended()`; which close codes the endpoint uses is its own
 * concern. Either way `onclose` fires exactly once, and nothing is replayed after a disconnect: a
 * reconnecting client starts a fresh MCP session.
 */
export declare function make(socket: Socket): SocketTransport;
