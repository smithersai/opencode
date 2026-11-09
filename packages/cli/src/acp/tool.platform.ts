import { isAbsolute as hostIsAbsolute } from "node:path"

export const isAbsolute = (...args: Parameters<typeof hostIsAbsolute>) => hostIsAbsolute(...args)

import { resolve as hostResolve } from "node:path"

export const resolve = (...args: Parameters<typeof hostResolve>) => hostResolve(...args)
