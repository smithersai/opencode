# Server

HTTP server and runtime composition for OpenCode.

Generated runtime modules retain explicit file paths for relative imports so packaged Server entrypoints load in Node ESM. Runtime import checks cover the generated module graph and equivalent relative URL forms.
