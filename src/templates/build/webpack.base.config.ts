const content = `import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

const baseConfig: webpack.Configuration = {
    module: {
        rules: [
            {
                test: /.s?css$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, '../src'),
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /.tsx?$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, '../src'),
                loader: 'ts-loader',
                options: {
                    // disable type checker - use it in fork plugin
                    transpileOnly: true,
                },
            },
            {
                test: /.(jpg|png|svg)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, '../src'),
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
            title: 'Your App Name',
            template: path.resolve(__dirname, '../src/index.html'),
        }),
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                files: './src/**/*.{ts,tsx,js,jsx}',
            },
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
};

export default baseConfig;
`;

export default content;
