export const environmentValue = (key: string) => process.env[key]

export const argumentVector = () => process.argv

export const makeTextDecoder = () => new TextDecoder()

export const decodeText = (decoder: TextDecoder, ...args: Parameters<TextDecoder["decode"]>) => decoder.decode(...args)
