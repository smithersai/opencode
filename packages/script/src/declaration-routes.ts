import path from "node:path"
import ts from "typescript"

export function privateDeclarationRoutes(source: string) {
  const file = ts.createSourceFile("declaration.d.ts", source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  const routes = new Set<string>()
  const add = (node: ts.Node | undefined) => {
    if (node && ts.isStringLiteralLike(node) && node.text.startsWith("#vibelang/emitted/")) routes.add(node.text)
  }
  const visit = (node: ts.Node) => {
    if (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) add(node.moduleSpecifier)
    if (ts.isImportTypeNode(node) && ts.isLiteralTypeNode(node.argument)) add(node.argument.literal)
    if (ts.isImportEqualsDeclaration(node) && ts.isExternalModuleReference(node.moduleReference))
      add(node.moduleReference.expression)
    if (ts.isModuleDeclaration(node)) add(node.name)
    if (
      ts.isCallExpression(node) &&
      (node.expression.kind === ts.SyntaxKind.ImportKeyword ||
        (ts.isIdentifier(node.expression) && node.expression.text === "require"))
    )
      add(node.arguments[0])

    ts.forEachChild(node, visit)
  }

  visit(file)
  return [...routes].sort()
}

export async function assertPublishableDeclarations(directory: string) {
  const files = new Bun.Glob("**/*.{d.ts,d.mts,d.cts}")
  const failures: string[] = []

  for await (const name of files.scan({ cwd: directory, absolute: true, onlyFiles: true })) {
    for (const route of privateDeclarationRoutes(await Bun.file(name).text()))
      failures.push(path.relative(directory, name) + ": " + route)
  }

  if (failures.length) throw new Error("Declarations contain a private emitted route:\n" + failures.sort().join("\n"))
}
