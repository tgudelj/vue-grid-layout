import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import path from 'path'

export default defineConfig({
    build: {
        minify: process.env.MINIFY !== 'false',
        lib: {
          entry: path.resolve(__dirname, './src/components/index.js'),
          name: 'VueGridLayout',
          formats: ["es", "cjs", "umd"],
          fileName: (format) => `vue-grid-layout.${format}${process.env.MINIFY === 'false' ? '' : '.min'}.js`
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            globals: {
              vue: 'Vue'
            }
          }
        },
    },
    plugins: [createVuePlugin()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
})