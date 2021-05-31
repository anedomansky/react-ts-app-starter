const content = `import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import path from 'path';
import webpackConfig from './webpack.dev.config';

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development';
}

const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackHotMiddleware(compiler, {
    log: false,
}));

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output!.publicPath!,
    writeToDisk: true,
    logLevel: 'error',
}));

// catch-all for any request
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'), (err) => {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.listen(4000, () => {
    console.log('The app is running on http://localhost:4000');
});
`;

export default content;
