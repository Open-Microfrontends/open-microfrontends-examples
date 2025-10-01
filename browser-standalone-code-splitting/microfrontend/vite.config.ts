import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    base: '', // See https://vite.dev/guide/build.html#relative-base
    build: {
        rollupOptions: {
            input: {
                Microfrontend: 'src/testPage.html',
            },
            output: {
                entryFileNames: '[name].js', // Entry file name needs to be stable (no hash)
                assetFileNames: '[name].[ext]', // CSS entry file name needs to be stable (no hash)
                chunkFileNames: '[name]-[hash].js',
            }
        }
    },
    plugins: [svelte()],
    server: {
        port: 7850,
        open: 'src/testPage.html',
    }
})
