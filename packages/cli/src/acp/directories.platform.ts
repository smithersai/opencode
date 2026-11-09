import { isAbsolute, join, resolve } from "node:path"
import { isDeepStrictEqual } from "node:util"

const platformIsAbsolute = (...args: Parameters<typeof isAbsolute>) => isAbsolute(...args)
const platformJoin = (...args: Parameters<typeof join>) => join(...args)
const platformResolve = (...args: Parameters<typeof resolve>) => resolve(...args)
const platformIsDeepStrictEqual = (...args: Parameters<typeof isDeepStrictEqual>) => isDeepStrictEqual(...args)

export {
  platformIsAbsolute as isAbsolute,
  platformJoin as join,
  platformResolve as resolve,
  platformIsDeepStrictEqual as isDeepStrictEqual,
}
