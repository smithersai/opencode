# @opencode/core

Core runtime services for OpenCode.

Decoded codec fields retain the `readonly` contract of their `Schema.Struct` definitions, including nested and optional fields. Consumer assignment checks cover these contracts alongside the runtime tests.

Native helper bridges use named imports, preserving their runtime behavior and the repository import rules.

Prepared runtime output includes native helper modules as well as converted modules. Relative imports in the generated module graph must name physical files, including helpers reached by file mutation and plugin updates.

Database migration commands run Drizzle with Bun so the configured VibeLang preload also loads schema dependencies.
