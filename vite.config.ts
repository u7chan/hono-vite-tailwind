import { defineConfig } from 'vite'
import devServer from '@hono/vite-dev-server'

export default defineConfig(({ mode }) =>
  mode === 'dev'
    ? {
        plugins: [
          devServer({
            entry: './src/app.ts',
          }),
        ],
      }
    : {
        build: {
          minify: true,
          outDir: './dist/static',
          rollupOptions: {
            input: ['./src/client/bundle.tsx', './src/client/styles.css'],
            output: {
              entryFileNames: 'bundle.js',
              assetFileNames: '[name].[ext]',
            },
          },
        },
      },
)
