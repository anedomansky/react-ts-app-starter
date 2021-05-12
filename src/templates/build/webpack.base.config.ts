const content = `import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

const baseConfig: webpack.Configuration = {
    module: {
        rules: [
            {
                test: /.s?css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    // disable type checker - use it in fork plugin
                    transpileOnly: true,
                },
            },
            {
                test: /.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash].[ext]',
                },
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            inject: true,
            title: 'Proma',
            template: path.resolve(__dirname, '../src/index.html'),
            // favicon: path.resolve(__dirname, '../src/assets/icons/favicon.ico'),
        }),
        new FriendlyErrorsWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
};

export default baseConfig;
`;

export default content;
