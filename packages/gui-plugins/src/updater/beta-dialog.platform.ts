// Browser host access for beta-dialog.vibex.

/**
 * The release notes embedded in this build, if any.
 * @throws {never}
 */
export function embeddedBetaNotes() {
  return import.meta.env.OPENCODE_BETA_NOTES
}

/** @throws {never} */
export function getComputedStyle(element: Element) {
  return globalThis.getComputedStyle(element)
}

/** @throws {never} */
export function createMutationObserver(callback: MutationCallback) {
  return new MutationObserver(callback)
}

/** @throws {never} */
export function documentElement() {
  return document.documentElement
}
