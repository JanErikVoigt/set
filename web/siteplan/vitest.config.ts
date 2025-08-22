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
    environment: 'jsdom',
    include: ['**/*.test.{js,ts}']
    // ...
  }
})
