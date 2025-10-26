import type {Application} from 'express';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import test from './routes/test';
import testSSR from './routes/testSSR';
import webpackConfig from '../../webpack.config.client';
import {OpenMicrofrontendsExampleSSRAssetsBasePath} from '../_generated/microfrontendRenderers';

export default async (app: Application) => {
    // Webpack middleware
    // @ts-ignore
    const compiler = webpack(webpackConfig);
    app.use(
        devMiddleware(compiler, {
            publicPath: OpenMicrofrontendsExampleSSRAssetsBasePath
        }),
    );
    app.use(hotMiddleware(compiler));

    // Test Pages
    app.use('/test', test);
    app.use('/test-ssr', testSSR);
};
