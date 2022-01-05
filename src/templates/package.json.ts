const content = `{
  "name": "nice-dir-yo",
  "version": "1.0.0",
  "description": "A new app.",
  "main": "dist/app.bundle.js",
  "scripts": {
    "start": "webpack serve --config ./build/webpack.dev.config.ts",
    "test": "jest --collectCoverage",
    "build": "webpack --config ./build/webpack.prod.config.ts"
  },
  "author": "your_name <your_email>",
  "dependencies": {
    "@types/node": "17.0.8",
    "@types/react": "^17.0.38",
    "@types/react-dom": "^17.0.11",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^6.2.1"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^5.16.1",
    "@testing-library/react": "^12.1.2",
    "@types/html-webpack-plugin": "^3.2.6",
    "@types/jest": "^27.4.0",
    "@types/webpack": "^5.28.0",
    "@types/webpack-env": "^1.16.3",
    "@typescript-eslint/eslint-plugin": "^5.9.0",
    "@typescript-eslint/parser": "^5.9.0",
    "clean-webpack-plugin": "^4.0.0",
    "css-loader": "^6.5.1",
    "eslint": "^8.6.0",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-plugin-import": "^2.25.4",
    "eslint-plugin-jsx-a11y": "^6.5.1",
    "eslint-plugin-react": "^7.28.0",
    "eslint-plugin-react-hooks": "^4.3.0",
    "file-loader": "^6.2.0",
    "fork-ts-checker-webpack-plugin": "^6.5.0",
    "html-webpack-plugin": "^5.5.0",
    "identity-obj-proxy": "^3.0.0",
    "jest": "^27.4.6",
    "sass": "^1.45.2",
    "sass-loader": "^12.4.0",
    "style-loader": "^3.3.1",
    "ts-jest": "^27.1.2",
    "ts-loader": "^9.2.6",
    "ts-node": "^10.4.0",
    "typescript": "^4.5.4",
    "url-loader": "^4.1.1",
    "webpack": "^5.65.0",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": "^4.7.2",
    "webpack-merge": "^5.8.0"
  }
}
`;

export default content;
