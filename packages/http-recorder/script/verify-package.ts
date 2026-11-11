#!/usr/bin/env bun
import { withPackedArchive } from "./pack.ts"
import { verifyPackage } from "./verify-package.main.js"

export * from "./verify-package.main.js"

if (import.meta.main) await withPackedArchive(verifyPackage)
