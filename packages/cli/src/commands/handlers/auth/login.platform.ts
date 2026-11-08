export const timeoutSignal = (milliseconds: number) => AbortSignal.timeout(milliseconds)

export const inputIsTTY = () => process.stdin.isTTY

export const outputIsTTY = () => process.stdout.isTTY
