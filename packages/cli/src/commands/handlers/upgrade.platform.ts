export const outputColumns = () => process.stdout.columns

import { stripVTControlCharacters as hostStripVTControlCharacters } from "node:util"

export const stripVTControlCharacters = (...args: Parameters<typeof hostStripVTControlCharacters>) =>
  hostStripVTControlCharacters(...args)
