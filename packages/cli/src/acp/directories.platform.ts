import { isAbsolute as hostIsAbsolute } from "node:path"

export const isAbsolute = (...args: Parameters<typeof hostIsAbsolute>) => hostIsAbsolute(...args)

import { join as hostJoin } from "node:path"

export const join = (...args: Parameters<typeof hostJoin>) => hostJoin(...args)

import { resolve as hostResolve } from "node:path"

export const resolve = (...args: Parameters<typeof hostResolve>) => hostResolve(...args)

import { isDeepStrictEqual as hostIsDeepStrictEqual } from "node:util"

export const isDeepStrictEqual = (...args: Parameters<typeof hostIsDeepStrictEqual>) => hostIsDeepStrictEqual(...args)
