import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'icon': path.resolve(__dirname, './public/icon'),
      'pages': path.resolve(__dirname, './src/pages' ),
      'shared': path.resolve(__dirname, './src/shared' ),
      'store': path.resolve(__dirname, './src/store' ),
      'components': path.resolve(__dirname, './src/components' ),
    }
  }
})
