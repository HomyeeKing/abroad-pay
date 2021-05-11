import path from 'path'
import { defineConfig } from 'vite'
import Mocker from 'vite-plugin-imock'
import vue from '@vitejs/plugin-vue'
import ViteComponents, {
  VantResolver,
} from 'vite-plugin-components'

const resolve = (name: string) => path.resolve(__dirname, name)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: [
        VantResolver(),
      ],
    }),
    Mocker(),
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
