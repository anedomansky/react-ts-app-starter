const content = `import express from 'express';
import open from 'open';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import dotenv from 'dotenv';
import path from 'path';
import webpackConfig from './webpack.dev.config';

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development';
}

dotenv.config();

const { PORT } = process.env;
// only opens the browser automatically if a value is set -> !true === false, !'' === false
const autoOpenBrowser = !!process.env.AUTO_OPEN_BROWSER;
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

const URL = 'http://localhost:' + PORT';

// catch-all for any request
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'), (err) => {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.listen(PORT, () => {
    if (autoOpenBrowser) {
        open(URL);
    }
});
`;

export default content;
