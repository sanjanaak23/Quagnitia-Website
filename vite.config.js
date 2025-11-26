import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true,
    host: true // Allow external access
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json']
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  base: '/', // Important for Vercel
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable sourcemaps for smaller build
    chunkSizeWarningLimit: 1600, // Increase chunk size warning limit
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['lucide-react', 'sonner', 'framer-motion']
        }
      }
    }
  },
  preview: {
    host: true,
    port: 4173
  }
})