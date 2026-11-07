import { assertPublishableDeclarations } from "./declaration-routes.js"
import { $ } from "bun"
import { mkdir, rm } from "node:fs/promises"
import path from "node:path"

const root = path.resolve(import.meta.dir, "../../..")

// Release outputs land at the repository root, where the release workflow uploads them.
export const npmDir = path.join(root, "dist", "npm")
export const archiveDir = path.join(root, "dist", "archives")

type Manifest = {
  name: string
  version: string
  exports: Record<string, string | null>
  imports?: Record<string, Record<string, string>>
}

/**
 * Builds the package in `directory`, points its TypeScript exports at the build output, and packs it
 * into dist/npm. `types` is where the build writes declarations; `source` keeps `import` on the
 * TypeScript sources for packages that ship them. `workspaceOnly` exports map to null, so the published package
 * resolves none of them, even through a wildcard export.
 */
export async function pack(
  directory: string,
  options: { types?: string; source?: boolean; workspaceOnly?: readonly string[] } = {},
) {
  const types = options.types ?? "./dist/"
  const file = path.join(directory, "package.json")
  const original = await Bun.file(file).text()
  // SAFETY: release packages declare a name, a version, and string export targets.
  const pkg = JSON.parse(original) as Manifest
  const declaration = (value: string) => value.replace("./src/", types).replace(/\.(?:tsx?|vibe)$/, ".d.ts")
  const output = (value: string) => value.replace("./src/", "./dist/").replace(/\.(?:tsx?|vibe)$/, ".js")
  const tarball = path.join(npmDir, `${pkg.name.replace("@", "").replace("/", "-")}-${pkg.version}.tgz`)

  await $`bun run build`.cwd(directory)
  await assertPublishableDeclarations(path.resolve(directory, types))

  const exports = Object.fromEntries(
    Object.entries(
      Object.fromEntries(
        Object.entries(pkg.exports).map(([key, target]: [string, unknown]) => [
          key,
          target !== null &&
          typeof target === "object" &&
          "vibelang-source" in target &&
          typeof target["vibelang-source"] === "string"
            ? target["vibelang-source"]
            : target !== null &&
                typeof target === "object" &&
                "default" in target &&
                typeof target.default === "string" &&
                target.default.endsWith(".vibe") &&
                "types" in target &&
                target.types === target.default.slice(0, -5) + ".d.vibe.ts"
              ? target.default
              : target,
        ]),
      ) as typeof pkg.exports,
    ).map(([key, value]) => {
      if (value === null || options.workspaceOnly?.includes(key)) return [key, null]

      if (!/\.(?:tsx?|vibe)$/.test(value)) return [key, value]

      return [key, { import: options.source ? value : output(value), types: declaration(value) }]
    }),
  )
  const imports = pkg.imports
    ? Object.fromEntries(
        Object.entries(pkg.imports).map(([key, conditions]) => [
          key,
          Object.fromEntries(
            Object.entries(
              Object.fromEntries(
                Object.entries(conditions).map(([__vibelangKey, __vibelangTarget]: [string, unknown]) => [
                  __vibelangKey,
                  (__vibelangKey === "types" ||
                    (__vibelangKey === "default" && typeof key === "string" && key.startsWith("#vibelang/source/"))) &&
                  typeof conditions["vibelang-source"] === "string"
                    ? conditions["vibelang-source"]
                    : __vibelangTarget !== null &&
                        typeof __vibelangTarget === "object" &&
                        "vibelang-source" in __vibelangTarget &&
                        typeof __vibelangTarget["vibelang-source"] === "string"
                      ? __vibelangTarget["vibelang-source"]
                      : __vibelangTarget !== null &&
                          typeof __vibelangTarget === "object" &&
                          "default" in __vibelangTarget &&
                          typeof __vibelangTarget.default === "string" &&
                          /\.vibex?$/.test(__vibelangTarget.default) &&
                          "types" in __vibelangTarget &&
                          __vibelangTarget.types === __vibelangTarget.default.slice(0, -5) + ".d.vibe.ts"
                        ? __vibelangTarget.default
                        : __vibelangTarget,
                ]),
              ) as typeof conditions,
            ).map(([condition, value]) => [condition, condition === "types" ? declaration(value) : output(value)]),
          ),
        ]),
      )
    : undefined

  await mkdir(npmDir, { recursive: true })
  await rm(tarball, { force: true })
  await Bun.write(file, JSON.stringify({ ...pkg, exports, ...(imports ? { imports } : {}) }, null, 2) + "\n")

  try {
    await $`bun pm pack --destination ${npmDir}`.cwd(directory)
  } finally {
    await Bun.write(file, original)
  }

  return tarball
}
