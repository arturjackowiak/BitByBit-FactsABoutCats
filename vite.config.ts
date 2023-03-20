import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: 'Components', replacement: path.resolve(__dirname, 'src/components') },
      { find: 'Styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: 'Hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: 'Context', replacement: path.resolve(__dirname, 'src/context') },
      { find: 'Pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: 'Types', replacement: path.resolve(__dirname, 'src/types') },
      { find: 'Enums', replacement: path.resolve(__dirname, 'src/enums') },
      { find: 'Layouts', replacement: path.resolve(__dirname, 'src/layouts') },
      { find: 'Schemas', replacement: path.resolve(__dirname, 'src/schemas') },
      { find: 'Helpers', replacement: path.resolve(__dirname, 'src/helpers') }
    ]
  }
});
