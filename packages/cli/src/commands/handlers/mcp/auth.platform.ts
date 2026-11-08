export const currentDirectory = () => process.cwd()

export const inputIsTTY = () => process.stdin.isTTY

export const outputIsTTY = () => process.stdout.isTTY
