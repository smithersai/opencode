
/** @throws {never} */
export function currentPlatform() { return process.platform }

export function basicPassword(password: string) { return Buffer.from(`opencode:${password}`).toString("base64") }
