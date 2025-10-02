import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    base: '', // See https://vite.dev/guide/build.html#relative-base
    build: {
        rollupOptions: {
            input: {
                Microfrontend: 'testPage.html',
            },
            output: {
                entryFileNames: '[name].js', // Entry file name needs to be stable (no hash)
                assetFileNames: (chunkInfo) => {
                    console.info('chunkInfo', chunkInfo);
                    // CSS entry file name needs to be stable (no hash)
                    if (chunkInfo.name === 'Microfrontend.css') {
                        return chunkInfo.name;
                    }
                    return '[name]-[hash][extname]';
                },
                chunkFileNames: '[name]-[hash].js',
            }
        }
    },
    plugins: [svelte()],
    server: {
        port: 7850,
        open: 'testPage',
    }
})
