import { defineConfig } from "vite"
import solid from "vite-plugin-solid"
import vibelang from "vibelang-vite"

export default defineConfig({
  root: import.meta.dirname,
  plugins: [vibelang(), solid()],
})
