const content = `{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "strict": true,
        "outDir": "./dist",
        "sourceMap": true,
        "allowSyntheticDefaultImports": true,
        "esModuleInterop": true,
        "jsx": "react",
        "alwaysStrict": true,
        "experimentalDecorators": true,
        "useDefineForClassFields": true
    },
    "include": [
        "src/**/*",
        "assets.d.ts"
    ],
    "exclude": [
        "node_modules",
        "**/*.test.ts"
    ]
}
`;

export default content;
