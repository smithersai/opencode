// Browser host access for beta-page.vibex.

/**
 * The release notes embedded in this build, if any.
 * @throws {never}
 */
export function embeddedBetaNotes() {
  return import.meta.env.OPENCODE_BETA_NOTES
}

/** @throws {never} */
export function createIntersectionObserver(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
  return new IntersectionObserver(callback, options)
}
