import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'module'

// Polyfill for crypto.hash
const require = createRequire(import.meta.url)
const crypto = require('crypto')
if (!crypto.hash) {
  crypto.hash = (algorithm, data) => {
    const hash = crypto.createHash(algorithm)
    hash.update(data)
    return hash.digest()
  }
}

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    force: true
  },
  server: {
    hmr: {
      overlay: false
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "s:/Acerite/Web Demo/404/src/styles/variables.scss";`
      }
    }
  }
})
