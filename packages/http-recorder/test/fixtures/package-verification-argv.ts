export {}

const expected: ReadonlyArray<string> = JSON.parse(Bun.argv[2] ?? "[]")
const actual = Bun.argv.slice(4)
await Bun.write(Bun.argv[3]!, JSON.stringify(actual))
if (JSON.stringify(actual) !== JSON.stringify(expected)) throw new Error("Command arguments changed")
