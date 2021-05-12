const content = `// handles all file transformation for ^*.tsx?$ files
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
        '@babel/preset-typescript',
        require.resolve('babel-preset-react-app'),
    ],
};
`;

export default content;
