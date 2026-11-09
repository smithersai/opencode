import { access as hostAccess } from "node:fs/promises"

export const access = (...args: Parameters<typeof hostAccess>) => hostAccess(...args)

import { constants as hostConstants } from "node:fs/promises"

export const constants = hostConstants

import { fileURLToPath as hostFileURLToPath } from "node:url"

export const fileURLToPath = (...args: Parameters<typeof hostFileURLToPath>) => hostFileURLToPath(...args)
