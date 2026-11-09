/** Copies RPC call headers into Fetch headers. @throws {TypeError} when a header name or value is invalid. */
export const fetchHeaders = (headers: HeadersInit) => new Headers(headers)
