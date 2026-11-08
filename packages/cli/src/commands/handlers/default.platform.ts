export const changeDirectory = (directory: string) => process.chdir(directory)

export const writeError = (...args: Parameters<typeof process.stderr.write>) => process.stderr.write(...args)

export const environmentValue = (key: string) => process.env[key]
