// The platform code of builtin.vibe, which VibeLang code does not use directly (EK4402).

const platformHasIdleCallback = () => typeof requestIdleCallback !== "undefined"

const platformRequestIdleCallback = (fn: () => void) => requestIdleCallback(fn)

const platformCancelIdleCallback = (id: number) => cancelIdleCallback(id)

const platformSetTimeout = (fn: () => void, ms: number) => setTimeout(fn, ms)

const platformClearTimeout = (id: ReturnType<typeof setTimeout>) => clearTimeout(id)

export {
  platformHasIdleCallback as hasIdleCallback,
  platformRequestIdleCallback as requestIdleCallback,
  platformCancelIdleCallback as cancelIdleCallback,
  platformSetTimeout as setTimeout,
  platformClearTimeout as clearTimeout,
}
