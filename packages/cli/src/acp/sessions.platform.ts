import { isDeepStrictEqual } from "node:util"

const platformIsDeepStrictEqual = (...args: Parameters<typeof isDeepStrictEqual>) => isDeepStrictEqual(...args)

export { platformIsDeepStrictEqual as isDeepStrictEqual }
