import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [vue()],
  test: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'rbush': __dirname + '/node_modules/rbush/rbush.js'
    },
    globals: true,
    browser: {
      provider: 'playwright', // or 'webdriverio'
      enabled: true,
      // at least one instance is required
      instances: [{ browser: 'chromium' }]
    }
  }

/*  test: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'rbush': __dirname + '/node_modules/rbush/rbush.js'
    },
    globals: true,
    environment: 'edge-runtime',
    include: ['***.test.{js,ts}']
    // ...
  } */
})
