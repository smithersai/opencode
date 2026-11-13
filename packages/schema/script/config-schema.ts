// Other packages run this file by path, some from a directory whose bunfig.toml has no vibelang/bun preload,
// so it registers the loader before it loads the VibeLang module.
import "vibelang/bun"

const { main } = await import("./config-schema.main.vibe")

if (import.meta.main) await main()
