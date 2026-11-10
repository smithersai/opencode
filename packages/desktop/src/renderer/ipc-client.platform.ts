// The platform code of ipc-client.vibe: the renderer window and console, which VibeLang code does not use directly
// (EK4402).

export const isWindow = (source: MessageEventSource | null) => source === window

export const addMessageListener = (listener: (event: MessageEvent) => void) =>
  window.addEventListener("message", listener)

export const removeMessageListener = (listener: (event: MessageEvent) => void) =>
  window.removeEventListener("message", listener)

export const onPageHide = (listener: () => void) => window.addEventListener("pagehide", listener, { once: true })

export const logError = (...data: unknown[]) => console.error(...data)
