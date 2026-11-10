// The platform code of builtins.vibe: the host platform name, which a .vibe file does not read (EK4402).

/** @throws {never} */
export function platform(): NodeJS.Platform {
  return process.platform
}
