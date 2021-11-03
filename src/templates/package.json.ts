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
    "@types/node": "16.11.6",
    "@types/react": "^17.0.34",
    "@types/react-dom": "^17.0.11",
    "@types/react-router-dom": "^5.3.2",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.3.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^5.15.0",
    "@testing-library/react": "^12.1.2",
    "@types/html-webpack-plugin": "^3.2.6",
    "@types/jest": "^27.0.2",
    "@types/webpack": "^5.28.0",
    "@types/webpack-env": "^1.16.3",
    "@types/webpack-merge": "^5.0.0",
    "@typescript-eslint/eslint-plugin": "^5.3.0",
    "@typescript-eslint/parser": "^5.3.0",
    "clean-webpack-plugin": "^4.0.0",
    "css-loader": "^6.5.0",
    "eslint": "^8.1.0",
    "eslint-config-airbnb": "^18.2.1",
    "eslint-plugin-import": "^2.25.2",
    "eslint-plugin-jsx-a11y": "^6.4.1",
    "eslint-plugin-react": "^7.26.1",
    "eslint-plugin-react-hooks": "^4.2.0",
    "file-loader": "^6.2.0",
    "fork-ts-checker-webpack-plugin": "^6.4.0",
    "html-webpack-plugin": "^5.5.0",
    "identity-obj-proxy": "^3.0.0",
    "sass": "^1.43.4",
    "sass-loader": "^12.3.0",
    "style-loader": "^3.3.1",
    "ts-jest": "^27.0.7",
    "ts-loader": "^9.2.6",
    "ts-node": "^10.4.0",
    "typescript": "^4.4.4",
    "url-loader": "^4.1.1",
    "webpack": "^5.61.0",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": "^4.4.0",
    "webpack-merge": "^5.8.0"
  }
}
`;

export default content;
