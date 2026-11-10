// The platform code of pty.vibe: the process environment and platform, which a .vibe file does not read (EK4402).

/** The process environment variables. @throws {never} */
export function processEnv(): Record<string, string | undefined> {
  return process.env
}

/** Reports whether the host is Windows. @throws {never} */
export function isWindows() {
  return process.platform === "win32"
}
