// Build flags from Vite's import.meta.env, which VibeLang code and module bodies cannot read.
export const dev = () => import.meta.env.DEV
