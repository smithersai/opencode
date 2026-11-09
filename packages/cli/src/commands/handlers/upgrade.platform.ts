export const outputColumns = () => process.stdout.columns

import { stripVTControlCharacters } from "node:util"

const stripControlCharacters = (...args: Parameters<typeof stripVTControlCharacters>) =>
  stripVTControlCharacters(...args)

export { stripControlCharacters as stripVTControlCharacters }
