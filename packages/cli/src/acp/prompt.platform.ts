import { access, constants } from "node:fs/promises"
import { fileURLToPath } from "node:url"

const platformAccess = (...args: Parameters<typeof access>) => access(...args)
const platformConstants = constants
const platformFileURLToPath = (...args: Parameters<typeof fileURLToPath>) => fileURLToPath(...args)

export { platformAccess as access, platformConstants as constants, platformFileURLToPath as fileURLToPath }
