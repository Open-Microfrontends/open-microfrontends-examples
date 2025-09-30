import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
    build: {
        rollupOptions: {
            input: "src/index.tsx",
        }
    },
    plugins: [
        react(),
        createHtmlPlugin({
            template: 'src/testPage.html',
            entry: 'src/index.tsx',
        })
    ],
    server: {
        port: 7811,
        open: true,
    }
});
