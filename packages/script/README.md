# Release scripts

The `@opencode/script` package supplies shared build and packaging helpers.

## Packing declarations

The shared `pack` helper runs the package build before creating its archive. Ordinary `.d.ts`, `.d.mts` and `.d.cts` output must refer to published modules. A `#vibelang/emitted/` module reference belongs to the workspace compiler setup and is rejected before the manifest is rewritten or an archive is created.

Fix the emitter or retain the native source boundary when a migrated module introduces such a reference. Changing typecheck flags does not make the published route resolvable. Quoted string types and comments are allowed because they do not import a module.

Run `bun test` in `packages/script` to check the pack rejection regression and declaration-route properties.
