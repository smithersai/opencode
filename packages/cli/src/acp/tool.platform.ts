import { isAbsolute, resolve } from "node:path"

const platformIsAbsolute = (...args: Parameters<typeof isAbsolute>) => isAbsolute(...args)
const platformResolve = (...args: Parameters<typeof resolve>) => resolve(...args)

export { platformIsAbsolute as isAbsolute, platformResolve as resolve }
