import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// When running inside Docker on the `thrift-net` network, the backend is
// reachable via container name "backend" on port 5000.
// Locally (npm run dev) it falls back to localhost:5001.
const backendTarget = process.env.VITE_BACKEND_URL || 'http://localhost:5001'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/api': {
        target: backendTarget,
        changeOrigin: true,
      }
    }
  }
})