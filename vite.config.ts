import { defineConfig } from 'vite'
import devServer from '@hono/vite-dev-server'

export default defineConfig(({ mode }) => ({
  plugins: [
    devServer({
      entry: 'src/index.tsx',
    }),
  ],
}))
