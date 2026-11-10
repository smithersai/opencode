// The platform code of models-dev.vibe: the host command line, which a .vibe file does not read (EK4402).

/** The command-line arguments of the host process. @throws {never} */
export function argv(): readonly string[] {
  return process.argv
}
