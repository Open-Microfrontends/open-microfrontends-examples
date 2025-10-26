import {dirname, resolve} from 'path';
import type {Configuration} from 'webpack';
import webpack from 'webpack';
import {VueLoaderPlugin} from 'vue-loader';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {fileURLToPath} from 'url';

const client: Configuration = {
    experiments: {
        outputModule: true,
    },
    entry: './src',
    output: {
        // Webpack does not support import.meta.dirname yet
        path: resolve(dirname(fileURLToPath(import.meta.url)), 'dist', 'public'),
        filename: 'Microfrontend.js',
        library: {
            type: 'module',
        },
    },
    devtool: 'source-map',
    mode: 'production',
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
    optimization: {
        minimize: true,
    }
};

// Development
if (process.env.NODE_ENV === 'local') {
    client.mode = 'development';
    client.entry = ['webpack-hot-middleware/client?reload=true', client.entry as string];
    client.plugins?.push(
        new webpack.HotModuleReplacementPlugin(),
    );
}

export default [
    client,
];
