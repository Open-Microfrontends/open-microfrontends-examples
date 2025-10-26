import {resolve} from 'path';
import type {Configuration} from 'webpack';
import {VueLoaderPlugin} from 'vue-loader';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import nodeExternals from 'webpack-node-externals';

const server: Configuration = {
    experiments: {
        outputModule: true,
    },
    entry: './src/server',
    output: {
        path: resolve(import.meta.dirname, 'dist'),
        filename: 'server.js',
        library: {
            type: 'module',
        },
        chunkFormat: 'module',
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    appendTsSuffixTo: [/\.vue$/]
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
    ],
    externalsPresets: {
        node: true
    },
    externals: nodeExternals({
        importType: 'module',
    }),
    optimization: {
        minimize: false,
        nodeEnv: false,
    }
};

export default [
    server,
];
