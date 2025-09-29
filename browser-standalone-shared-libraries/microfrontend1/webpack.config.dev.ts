import {resolve} from 'path';
import type {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import 'webpack-dev-server';

const microfrontend1: Configuration = {
    entry: './src',
    output: {
        path: resolve(import.meta.dirname, 'dist'),
        filename: 'Microfrontend1.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: true,
                                namedExport: false,
                                exportLocalsConvention: "as-is",
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/testPage.ejs'
        })
    ],
    devServer: {
        port: 7810,
        static: 'src/dev',
        open: true,
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        }
    },
};

export default [
    microfrontend1,
];
