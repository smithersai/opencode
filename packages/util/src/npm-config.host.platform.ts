
import { fileURLToPath } from "node:url"
export function npmPath(url: string) { return fileURLToPath(new URL("..", url)) }
