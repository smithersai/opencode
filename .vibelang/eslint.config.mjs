import parser from "vibelang/eslint"
import tseslint from "typescript-eslint"
export default [
  { ignores: ["**/node_modules/**", "**/dist/**", "**/build/**"] },
  ...tseslint.configs.recommended.map((config) => ({ ...config, files: ["**/*.vibe"] })),
  {
    files: ["**/*.vibe"],
    languageOptions: { parser },
    rules: {
      "no-debugger": "error",
      // TypeScript ignores properties destructured beside a rest element, and the repository omits keys that way.
      "@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true }],
    },
  },
]
