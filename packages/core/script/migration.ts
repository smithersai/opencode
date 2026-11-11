#!/usr/bin/env bun

import { main } from "./migration.main.js"

export * from "./migration.main.js"

if (import.meta.main) await main()
