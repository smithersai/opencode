// The platform code of provider.vibe: module resolution from this directory, which a .vibe file does not use (EK4402).

/** Resolves a package specifier from this module's directory, or `undefined` when it does not resolve. @throws {never} */
export function resolveSpecifier(specifier: string): string | undefined {
  try {
    return import.meta.resolve(specifier)
  } catch {
    return undefined
  }
}
