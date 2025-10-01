import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    build: {
        rollupOptions: {
            input: 'src/testPage.html',
        }
    },
    plugins: [
        react()
    ],
    server: {
        port: 7811,
        open: 'src/testPage.html',
    }
});
