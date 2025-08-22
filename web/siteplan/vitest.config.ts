import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'rbush': __dirname + '/node_modules/rbush/rbush.js'
    },
    globals: true,
    environment: 'happy-dom',
    include: ['**/*.test.{js,ts}']
    // ...
  }
})
