import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
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
};
