# Release scripts

The `@opencode/script` package supplies shared build and packaging helpers.

## Packing declarations

The shared `pack` helper runs the package build before creating its archive. Ordinary `.d.ts`, `.d.mts` and `.d.cts` output must refer to published modules. A `#vibelang/emitted/` module reference belongs to the workspace compiler setup and is rejected before the manifest is rewritten or an archive is created.

Fix the emitter or retain the native source boundary when a migrated module introduces such a reference. Changing typecheck flags does not make the published route resolvable. Quoted string types and comments are allowed because they do not import a module.

The `workspaceOnly` option lists export subpaths that the archive must keep private. It adds explicit `null` export masks even when a wildcard is the only existing export. For example, `pack(directory, { workspaceOnly: ["./internal/*"] })` keeps those helpers inaccessible to external consumers while ordinary exports and declaration files remain available.

Declaration generation checks the `vibelang --listFilesOnly` output for each project. Imported `.vibe` and `.vibex` modules are covered, while standalone fixtures excluded by the project need no sidecar. The progress output reports each project's actual module count.

Run `bun test` in `packages/script` to check the pack rejection regression and declaration-route properties.

The helper is also checked by packages using `NodeNext`. Keep explicit `.js` extensions on its relative ECMAScript imports. The test suite compiles a real `NodeNext` consumer and checks the helper’s imports from generated package locations under both `Node16` and `NodeNext` resolution.
