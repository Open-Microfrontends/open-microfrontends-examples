import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy'
import terser from '@rollup/plugin-terser';
// @ts-ignore
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: {
        Microfrontend1: 'src/index.tsx',
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
        postcss({
            modules: true,
        }),
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify(production ? 'production' :'development'),
        }),
        copy({
            targets: [
                { src: '../microfrontends1.yaml', dest: 'dist', rename: 'microfrontends.yaml' },
                { src: 'testPage.html', dest: 'dist' },
            ]
        }),
        ...(!production ? [
            serve({
                port: 7820,
                open: true,
                openPage: '/testPage.html',
                contentBase: 'dist',
                production,
            }),
            livereload({
                watch: 'dist',
            }),
        ] : [
            terser({}),
        ]),
    ],
};
