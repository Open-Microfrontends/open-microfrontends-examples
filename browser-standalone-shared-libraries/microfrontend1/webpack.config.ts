import {resolve} from 'path';
import type {Configuration} from 'webpack';

const microfrontend1: Configuration = {
    entry: './src',
    output: {
        path: resolve(import.meta.dirname, 'dist'),
        filename: 'Microfrontend1.js',
        libraryTarget: 'system',
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
    externalsType: 'system',
    // Must correspond to the externals in the Microfrontend Descriptor
    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
        'react-dom/client': 'react-dom/client',
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    }
};

export default [
    microfrontend1,
];
