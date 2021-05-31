const content = `import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import baseConfig from './webpack.base.config';

const prodConfig: webpack.Configuration = {
    devtool: 'source-map',
    entry: {
        app: ['./src/index.tsx'],
    },
    mode: 'production',
    optimization: {
        noEmitOnErrors: false,
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: './',
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    stats: 'errors-only',
};

export default merge(baseConfig, prodConfig);
`;

export default content;
