import { existsSync, readFileSync } from "node:fs"
import parser from "vibelang/eslint"
import { spawnSync } from "node:child_process"
import { fileURLToPath, pathToFileURL } from "node:url"
import oxc from "./oxlint-rules.mjs"
import { withOxlintComments, blanketReasonPolicy } from "./oxlint-comments.mjs"
const aliases = new Map()
export const writtenConfigs = new Map()
const nativePlugins = new Set(["eslint", "typescript", "@typescript-eslint", "unicorn", "react", "react_perf", "react-perf", "react-hooks", "jsx-a11y", "jsx_a11y", "nextjs", "next", "oxc", "deepscan", "import", "import-x", "jsdoc", "jest", "vitest", "promise", "node", "n", "regex", "vue"])
export const oxlintRuleName = name => aliases.get(name) ?? (name.includes("/") ? name : "eslint/" + name)
export async function configFor(configPath, strict = false) {
aliases.clear()
// The repository's Oxlint configuration, read on each run: its rules and its
// overrides (a *.ts glob read as *.vibe) apply to .vibe files wherever ESLint,
// typescript-eslint or one of the configuration's JS plugins has the rule.
// typescript-eslint's recommended rules stand in for Oxlint's default
// correctness rules unless the configuration turns that category off or the
// installed tool resolves the rules itself. Rules of
// Oxlint's other built-in plugins, such as unicorn, are not carried:
// vibelang/oxlint runs them on the projected TypeScript. Each run names any
// JS plugin rule that runs nowhere.
const read = (name) => {
  const url = new URL("../" + name, import.meta.url)
  return existsSync(url) ? readFileSync(url, "utf8") : null
}
// vp lint reads the lint section of the Vite config before any .oxlintrc. A
// config that fails to load fails this pass: a silent fallback lints .vibe
// files with no rules.
const viteLint = async () => {
  for (const name of ["vite.config.ts", "vite.config.mts", "vite.config.vibe", "vite.config.js", "vite.config.mjs"]) {
    const url = new URL("../" + name, import.meta.url)
    if (!existsSync(url)) continue
    const { default: loaded } = await import(url.href)
    const config = await (typeof loaded === "function" ? loaded({ command: "build", mode: "production" }) : loaded)
    return config?.lint ?? null
  }
  return null
}
const fromVite = null
// A configuration written as a module, oxlint.config.ts or one a lint script
// names with -c, is code only Oxlint loads: it imports defineConfig and may
// compute its rules. Oxlint's printed configuration stands for its text.
const scriptName = /\.[cm]?[jt]s$/
const named = configPath ?? null
const script = fromVite ? null : named !== null ? (scriptName.test(named) ? named : null)
  : read(".oxlintrc.json") === null && read(".oxlintrc.jsonc") === null ? ["oxlint.config.ts", "oxlint.config.mts", "oxlint.config.cts", "oxlint.config.js", "oxlint.config.mjs", "oxlint.config.cjs"].find((name) => read(name) !== null) ?? null : null
const text = fromVite || script ? null : configPath ? readFileSync(configPath, "utf8") : read(".oxlintrc.json") ?? read(".oxlintrc.jsonc")
const base = configPath ? new URL("./", pathToFileURL(configPath)) : new URL("../" + "", import.meta.url)
// Categories and plugin defaults decide most of a .ts file's rules, so the
// rules come from the tool's own resolution, with the written rules over them
// (it leaves JS plugin rules out of its base rules). Without the tool installed
// the written rules are all there is.
const tool = new URL("../node_modules/.bin/" + (fromVite ? "vp" : "oxlint"), import.meta.url)
const printConfig = (args) => {
  const printed = spawnSync(fileURLToPath(tool), args, { cwd: fileURLToPath(new URL("../", import.meta.url)), encoding: "utf8", maxBuffer: 64 * 1024 * 1024 })
  if (printed.status !== 0) throw new Error(tool.pathname + " " + args.join(" ") + " failed: " + printed.stdout + printed.stderr)
  return JSON.parse(printed.stdout)
}
if (script && !existsSync(tool)) throw new Error(script + " is a module only Oxlint loads, and " + fileURLToPath(tool) + " is not installed")
const printedScript = script ? printConfig(["-c", script, "--print-config"]) : null
const written = printedScript ?? (fromVite ?? text ? fromVite ?? JSON.parse(text.replace(/("(?:\\.|[^"\\])*")|\/\*[\s\S]*?\*\/|\/\/[^\n]*/g, (all, string) => string ?? "").replace(/,(\s*[}\]])/g, "$1")) : {})
const resolvedRules = () => {
  if (printedScript) return printedScript.rules ?? {}
  if (!existsSync(tool) || (!fromVite && !text)) return {}
  const named = configPath ?? (read(".oxlintrc.json") ? ".oxlintrc.json" : ".oxlintrc.jsonc")
  return printConfig(fromVite ? ["lint", "--print-config"] : ["-c", named, "--print-config"]).rules ?? {}
}
const toolRules = resolvedRules()
const oxlint = { ...written, rules: { ...toolRules, ...written.rules } }
writtenConfigs.set(configPath ?? null, { written, base: fileURLToPath(base) })
// An Oxlint JS plugin is an ESLint plugin. Each loads as Oxlint loads it: a
// path from the configuration's directory, else a package, named by its alias,
// else by its meta.name or package name less an eslint-plugin or oxlint-plugin
// prefix. Its rules read a .vibe file's source tree as they read a .ts file's.
const pluginName = (name, specifier) => {
  if (typeof name !== "string") throw new Error(specifier + ": Oxlint names a JS plugin by its alias, its meta.name or its package name, and this one has none")
  const slash = name.indexOf("/")
  const scope = slash === -1 ? "" : name.slice(0, slash + 1)
  const rest = name.slice(scope.length)
  for (const prefix of ["eslint-plugin", "oxlint-plugin"]) {
    if (scope && rest === prefix) return scope.slice(0, -1)
    if (rest.startsWith(prefix + "-")) return scope + rest.slice(prefix.length + 1)
  }
  return name
}
// A rule written for Oxlint's createOnce API runs as Oxlint's
// eslintCompatPlugin runs it under ESLint: once per file.
const eslintRule = (rule) => rule.create || !rule.createOnce ? rule : {
  ...rule,
  create(context) {
    const { before, after, ...visitor } = rule.createOnce(context)
    if (before && before() === false) return {}
    if (!after) return visitor
    const exit = visitor["Program:exit"]
    return { ...visitor, "Program:exit"(node) { if (exit) exit(node); after() } }
  }
}
const jsPlugins = new Map(await Promise.all((oxlint.jsPlugins ?? []).map(async (entry) => {
  const { name, specifier } = typeof entry === "string" ? { specifier: entry } : entry
  const local = /^(?:\.\.?)?\//.test(specifier)
  const module = await import(local ? new URL(specifier, base).href : specifier)
  const plugin = module.default ?? module
  const packageName = local ? undefined : specifier.split("/").slice(0, specifier.startsWith("@") ? 2 : 1).join("/")
  const rules = Object.fromEntries(Object.entries(plugin.rules ?? {}).map(([rule, definition]) => [rule, eslintRule(definition)]))
  return [name ?? pluginName(plugin.meta?.name ?? packageName, specifier), { ...plugin, rules }]
})))
// typescript-eslint refuses TypeScript 7, so its rules join only where it loads.
const tseslint = await import("typescript-eslint").then(({ default: loaded }) => {
  const unused = loaded.plugin.rules["no-unused-vars"]
  if (!unused?.create) return loaded
  // Oxlint counts a typeof query as a read. typescript-eslint instead emits
  // usedOnlyAsType, including for erased declare const unique-symbol brands.
  // Adapt only that diagnostic; unused declarations and configured options
  // still run through the original rule. The standalone parser is unchanged.
  const rule = { ...unused, create(context) {
    const adapted = Object.create(context)
    Object.defineProperty(adapted, "report", { value(descriptor) {
      if (descriptor.messageId !== "usedOnlyAsType") context.report(descriptor)
    } })
    return unused.create(adapted)
  } }
  return { ...loaded, plugin: { ...loaded.plugin, rules: { ...loaded.plugin.rules, "no-unused-vars": rule } } }
}, () => null)
const core = await import("eslint/use-at-your-own-risk").then(({ builtinRules }) => builtinRules, () => null)
const typed = new Set(Object.keys(tseslint?.plugin?.rules ?? {}))
// Without typescript-eslint, ESLint's core no-unused-vars reads TypeScript as
// JavaScript. Three reports are wrong on a .vibe file: a parameter of a type
// signature names no binding; a name in a declare block merges with a type
// elsewhere; and an effect import no code names stays because the declaration
// file prints it (D501). Every other report and all options pass through.
const coreUnused = core?.get("no-unused-vars")
const signatures = new Set(["TSFunctionType", "TSConstructorType", "TSMethodSignature", "TSCallSignatureDeclaration", "TSConstructSignatureDeclaration", "TSDeclareFunction", "TSEmptyBodyFunctionExpression"])
const patterns = new Set(["RestElement", "AssignmentPattern", "ArrayPattern", "ObjectPattern", "Property", "TSParameterProperty"])
const namesNothing = (node) => {
  let owner = node?.parent
  while (owner && patterns.has(owner.type)) owner = owner.parent
  if (owner && signatures.has(owner.type)) return true
  if (owner?.type === "ImportDeclaration" || owner?.type === "ImportNamespaceSpecifier" || owner?.type === "ImportSpecifier" || owner?.type === "ImportDefaultSpecifier") {
    const declaration = owner.type === "ImportDeclaration" ? owner : owner.parent
    return /^effect(?:\/|$)/.test(declaration?.source?.value ?? "")
  }
  for (let up = node?.parent; up; up = up.parent) if (up.type === "TSModuleDeclaration" && (up.declare || up.kind === "global")) return true
  return false
}
const adaptedUnused = coreUnused && { ...coreUnused, create(context) {
  const adapted = Object.create(context)
  Object.defineProperty(adapted, "report", { value(descriptor) { if (!namesNothing(descriptor.node)) context.report(descriptor) } })
  return coreUnused.create(adapted)
} }
const levels = { allow: "off", deny: "error", off: "off", warn: "warn", error: "error", 0: "off", 1: "warn", 2: "error" }
const missing = new Set()
// Oxlint does not run these two on TypeScript files, whose checker reports
// them (TS2378, TS2393); VibeLang's checker reports them in .vibe files.
const typescriptChecked = new Set(["getter-return", "no-dupe-class-members"])
const rules = (settings = {}) => Object.fromEntries(Object.entries(settings).flatMap(([name, setting]) => {
  const [level, ...options] = [setting].flat()
  const value = [levels[level] ?? level, ...options]
  const plugin = name.includes("/") ? name.slice(0, name.lastIndexOf("/")) : ""
  const rule = name.slice(name.lastIndexOf("/") + 1)
  if ((plugin === "" || plugin === "eslint") && typescriptChecked.has(rule)) return []
  const typedName = "@typescript-eslint/" + rule
  // A core rule typescript-eslint extends for TypeScript, as Oxlint's does, is typescript-eslint's.
  if (plugin === "typescript" || plugin === "@typescript-eslint" || ((plugin === "" || plugin === "eslint") && typed.has(rule))) {
    if (!typed.has(rule)) { if (levels[level] !== "off") missing.add(name); return [] }
    // The source parser has no TypeScript program. Keep type-aware rules on
    // the native projection pass, which owns the configured type information.
    if (tseslint.plugin.rules[rule].meta?.docs?.requiresTypeChecking) return []
    aliases.set(typedName, (plugin === "" || plugin === "eslint") ? "eslint/" + rule : "typescript/" + rule)
    return [[typedName, value]]
  }
  if ((plugin === "" || plugin === "eslint") && rule === "no-unused-vars" && adaptedUnused) {
    aliases.set("vibelang/no-unused-vars", "eslint/no-unused-vars")
    return [["vibelang/no-unused-vars", value]]
  }
  if (plugin === "" || plugin === "eslint") return !core || core.has(rule) ? [[rule, value]] : (levels[level] === "off" || missing.add(name), [])
  if (plugin === "oxc" && oxc.rules[rule]) return [[name, value]]
  if (jsPlugins.get(plugin)?.rules[rule]) return [[name, value]]
  if (levels[level] !== "off") missing.add(name)
  return []
}))
const vibe = (glob) => glob.replace(/\.\{([^}]*)\}$/, (all, list) => {
  const mapped = [...new Set(list.split(",").map(e => e.trim() === "tsx" ? "vibex" : /^[cm]?ts$/.test(e.trim()) ? "vibe" : e.trim()))]
  return mapped.length === 1 ? "." + mapped[0] : ".{" + mapped.join(",") + "}"
}).replace(/\.(tsx|[cm]?ts)$/, (all, ext) => ext === "tsx" ? ".vibex" : ".vibe")
const overrides = (oxlint.overrides ?? [])
  .map((override) => ({ files: [override.files].flat().filter((glob) => vibe(glob) !== glob || /[.]vibex?$/.test(glob) || !/[.][a-z0-9]+$/i.test(glob)).map((glob) => vibe(glob) === glob ? [glob, "**/*.{vibe,vibex}"] : vibe(glob)), rules: rules(override.rules) }))
  .filter((override) => override.files.length && Object.keys(override.rules).length)
// Like Oxlint, ignorePatterns are relative to the lint invocation's cwd.
const ignores = (function nativeIgnorePatterns(patterns) {
  const convert = value => {
    const negative = value.startsWith("!")
    let pattern = negative ? value.slice(1) : value
    const slash = pattern.indexOf("/")
    if (slash < 0 || slash === pattern.length - 1) pattern = "**/" + pattern
    else if (slash === 0) pattern = pattern.slice(1)
    // Parentheses are literal in Oxlint, not minimatch extglobs.
    let escaped = ""
    for (let i = 0; i < pattern.length; i++) {
      const char = pattern[i]
      if (char === "\\" && i + 1 < pattern.length) escaped += char + pattern[++i]
      else escaped += char === "(" ? "\\(" : char
    }
    if (escaped.endsWith("/")) escaped += "**/*"
    else if (escaped.endsWith("/**")) escaped += "/*"
    const prefix = negative ? "!" : ""
    return [prefix + escaped, prefix + escaped + "/**/*"]
  }
  return patterns.flatMap(pattern => {
    if (pattern === "") return []
    const native = pattern
      .replace(/\.\{([^{}]+)\}$/, (whole, list) => {
        const parts = list.split(",")
        if (!parts.some(part => /^(?:[cm]?ts|tsx)$/.test(part))) return whole
        const mapped = [...new Set(parts.map(part => part === "tsx" ? "vibex" : /^[cm]?ts$/.test(part) ? "vibe" : part))]
        return mapped.length === 1 ? "." + mapped[0] : ".{" + mapped.join(",") + "}"
      })
      .replace(/\.tsx$/, ".vibex").replace(/\.[cm]?ts$/, ".vibe")
    const mapped = [...new Set([pattern, native])].flatMap(convert)
    if (!pattern.startsWith("!")) return mapped
    // Reopen only ancestors the negated glob can reach. A fixed prefix
    // must not force traversal through every unrelated ignored directory.
    const ancestors = []
    for (const value of mapped) {
      const parts = value.slice(1).split("/")
      for (let i = 1; i < parts.length; i++) ancestors.push("!" + parts.slice(0, i).join("/") + "/")
    }
    return [...new Set(ancestors), ...mapped]
  })
})(oxlint.ignorePatterns ?? [])
// typescript-eslint's recommended rules stand in for Oxlint's default
// correctness rules only where the tool's resolution is unavailable. Where it
// resolved the rules, they are Oxlint's whole set: a recommended rule Oxlint
// does not run, such as no-empty-object-type, would report on .vibe what its
// .ts original never reported.
const correctness = levels[oxlint.categories?.correctness] !== "off" && Object.keys(toolRules).length === 0
const configs = [
  { ignores: [...ignores, "**/node_modules/**", "**/dist/**", "**/build/**", "**/*.d.vibe.ts", "**/*.d.vibex.ts"] },
  ...(correctness && tseslint ? tseslint.configs.recommended.map((config) => ({ ...config, ...(config.plugins ? { plugins: { ...config.plugins, "@typescript-eslint": tseslint.plugin } } : {}), files: ["**/*.{vibe,vibex}"] })) : []),
  { files: ["**/*.{vibe,vibex}"], linterOptions: { reportUnusedDisableDirectives: "off" }, languageOptions: { parser: withOxlintComments(parser, aliases, blanketReasonPolicy(fileURLToPath(tool), fromVite ? ["lint"] : [])) }, plugins: { oxc, ...(adaptedUnused ? { vibelang: { rules: { "no-unused-vars": adaptedUnused } } } : {}), ...(tseslint ? { "@typescript-eslint": tseslint.plugin } : {}), ...Object.fromEntries(jsPlugins) }, rules: { ...(correctness ? { "no-debugger": "error" } : {}), ...rules(oxlint.rules) } },
  ...overrides
]
// vibelang/oxlint runs the native plugins' other rules on the projected TypeScript.
const unrun = [...missing].filter((name) => name.includes("/") && !nativePlugins.has(name.slice(0, name.lastIndexOf("/"))))
if (strict && unrun.length) throw new Error("Oxlint rules unavailable on .vibe files: " + unrun.join(", "))
if (unrun.length) console.error("vibelang: " + unrun.length + " Oxlint rules do not run on .vibe files: " + unrun.sort().join(", "))
return configs
}
export default await configFor()
