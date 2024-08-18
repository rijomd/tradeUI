import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:
    {
      '@': path.resolve(__dirname, './src'),
      'assets': `${path.resolve(__dirname, './src/assets')}`,
      'components': `${path.resolve(__dirname, './src/components')}`,
      'modules': `${path.resolve(__dirname, './src/modules')}`,
      'service': `${path.resolve(__dirname, './src/service')}`,
      'store': `${path.resolve(__dirname, './src/store')}`,
      'routes': `${path.resolve(__dirname, './src/routes')}`,
      'themes': `${path.resolve(__dirname, './src/themes')}`
    },
  },
});
