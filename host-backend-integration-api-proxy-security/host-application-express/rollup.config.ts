import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default [{
    input: {
        main: 'src/main.ts',
    },
    output: [{
        dir: 'dist',
        entryFileNames: '[name].js',
        format: 'es',
        sourcemap: true,
    }],
    plugins: [
        resolve({}),
        commonjs({}),
        typescript({}),
        terser({}),
    ],
}, {
    input: 'src/server.ts',
    output: [{
        file: 'dist/server.js',
        format: 'esm',
    }],
    target: 'node',
    external: [/node_modules/],
    plugins: [
        resolve({}),
        commonjs({}),
        typescript({}),
    ],
}];
