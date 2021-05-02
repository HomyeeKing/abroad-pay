import path from 'path'
import { defineConfig, PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

const resolve = (name: string) => path.resolve(__dirname, name)

function mocker(): PluginOption {
  let mockjs

  try {
    const resolved = require.resolve('mockjs')
    mockjs = require(resolved)
  }
  catch (e) {
    throw new Error('vite-plugin-mocker requires mockjs to be present in the dependency tree.')
  }
  function clearRequireCache() {
    Object.keys(require.cache).forEach((key) => {
      delete require.cache[key]
    })
  }
  return {
    name: 'vite-plugin-mocker',
    enforce: 'pre',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url.startsWith('/api')) {
          const key = resolve(`mocker${req.url}`)
          try {
            clearRequireCache()
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const data = require(key)()
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(mockjs.mock(data)))
            return
          }
          catch (error) {
            throw new Error(error)
          }
        }
        next()
      })
    },
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`
          },
        },
      ],
    }),
    mocker(),
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  server: {
    open: true,
  },

})
