import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                Microfrontend2: 'testPage.html',
            },
            output: {
                entryFileNames: '[name].js', // Entry file name needs to be stable (no hash)
                assetFileNames: (chunkInfo) => {
                    console.info('chunkInfo', chunkInfo);
                    // CSS entry file name needs to be stable (no hash)
                    if (chunkInfo.name === 'Microfrontend2.css') {
                        return chunkInfo.name;
                    }
                    return '[name]-[hash][extname]';
                },
            }
        }
    },
    plugins: [vue()],
    server: {
        port: 7821,
        open: 'testPage',
    }
})
