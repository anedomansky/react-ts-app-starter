const content = `import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import baseConfig from './webpack.base.config';

const devConfig: webpack.Configuration = {
    devtool: 'eval-source-map',
    entry: {
        app: './src/index.tsx',
    },
    mode: 'development',
    optimization: {
        emitOnErrors: false,
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['!index.html'],
        }),
    ],
    stats: 'errors-only',
};

export default merge(baseConfig, devConfig);
`;

export default content;
