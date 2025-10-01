import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    build: {
        sourcemap: true,
        rollupOptions: {
            input: {
                Microfrontend2: 'src/index.tsx'
            },
            output: {
                format: 'system',
                dir: 'dist',
                entryFileNames: '[name].js',
            },
            external: ['react', 'react-dom', 'react-dom/client'],
        }
    },
    plugins: [react()],
});
