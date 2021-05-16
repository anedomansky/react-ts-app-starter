#!/usr/bin/env node

import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import packageJSON from './templates/package.json';
import tsconfig from './templates/tsconfig.json';
import assetsTypes from './templates/assets.types';
import env from './templates/env';
import eslintConfig from './templates/eslintrc.json';
import gitattributes from './templates/gitattributes';
import gitignore from './templates/gitignore';
import README from './templates/README.md';
import babelConfig from './templates/babel.config';
import jestConfig from './templates/jest.config';
import index from './templates/src/index';
import indexHTML from './templates/src/index.html';
import indexSCSS from './templates/src/index.scss';
import setupTests from './templates/src/setupTests';
import fileMock from './templates/src/__mocks__/fileMock';
import app from './templates/src/components/app/App';
import appSCSS from './templates/src/components/app/App.scss';
import appTest from './templates/src/components/app/App.test';
import landingPage from './templates/src/components/landing-page/LandingPage';
import landingPageSCSS from './templates/src/components/landing-page/LandingPage.scss';
import landingPageTest from './templates/src/components/landing-page/LandingPage.test';
import routes from './templates/src/components/routes/Routes';
import server from './templates/build/server';
import webpackBase from './templates/build/webpack.base.config';
import webpackDev from './templates/build/webpack.dev.config';
import webpackProd from './templates/build/webpack.prod.config';

console.log(__dirname);
console.log(process.argv);

const appName = process.argv[2];

console.log(`Creating all files in ${appName}`);

const updatedPackageJSON = JSON.parse(packageJSON);
updatedPackageJSON.name = appName;

// /
fs.promises.mkdir(path.dirname(`${appName}/package.json`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/package.json`, JSON.stringify(updatedPackageJSON, null, 2)))
    .catch((error) => console.error('An error occurred while copying files:', error));

fs.promises.mkdir(path.dirname(`${appName}/tsconfig.json`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/tsconfig.json`, tsconfig))
    .catch((error) => console.error('An error occurred while copying files:', error));

fs.promises.mkdir(path.dirname(`${appName}/assets.d.ts`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/assets.d.ts`, assetsTypes))
    .catch((error) => console.error('An error occurred while copying files:', error));

fs.promises.mkdir(path.dirname(`${appName}/.env`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/.env`, env))
    .catch((error) => console.error('An error occurred while copying files:', error));

fs.promises.mkdir(path.dirname(`${appName}/.eslintrc.json`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/.eslintrc.json`, eslintConfig))
    .catch((error) => console.error('An error occurred while copying files:', error));

fs.promises.mkdir(path.dirname(`${appName}/.gitattributes`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/.gitattributes`, gitattributes))
    .catch((error) => console.error('An error occurred while copying files:', error));

fs.promises.mkdir(path.dirname(`${appName}/.gitignore`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/.gitignore`, gitignore))
    .catch((error) => console.error('An error occurred while copying files:', error));

fs.promises.mkdir(path.dirname(`${appName}/README.md`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/README.md`, README))
    .catch((error) => console.error('An error occurred while copying files:', error));

fs.promises.mkdir(path.dirname(`${appName}/babel.config.js`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/babel.config.js`, babelConfig))
    .catch((error) => console.error('An error occurred while copying files:', error));

fs.promises.mkdir(path.dirname(`${appName}/jest.config.js`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/jest.config.js`, jestConfig))
    .catch((error) => console.error('An error occurred while copying files:', error));

// /src
fs.promises.mkdir(path.dirname(`${appName}/src/index.ts`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/src/index.tsx`, index))
    .catch((error) => console.error('An error occurred while copying files:', error));

fs.promises.mkdir(path.dirname(`${appName}/src/index.html`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/src/index.html`, indexHTML))
    .catch((error) => console.error('An error occurred while copying files:', error));

fs.promises.mkdir(path.dirname(`${appName}/src/index.scss`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/src/index.scss`, indexSCSS))
    .catch((error) => console.error('An error occurred while copying files:', error));

fs.promises.mkdir(path.dirname(`${appName}/src/setupTests.ts`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/src/setupTests.ts`, setupTests))
    .catch((error) => console.error('An error occurred while copying files:', error));

// /src/__mocks__
fs.promises.mkdir(path.dirname(`${appName}/src/__mocks__/fileMock.js`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/src/__mocks__/fileMock.js`, fileMock))
    .catch((error) => console.error('An error occurred while copying files:', error));

// /src/components
fs.promises.mkdir(path.dirname(`${appName}/src/components/app/App.tsx`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/src/components/app/App.tsx`, app))
    .catch((error) => console.error('An error occurred while copying files:', error));

fs.promises.mkdir(path.dirname(`${appName}/src/components/app/App.scss`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/src/components/app/App.scss`, appSCSS))
    .catch((error) => console.error('An error occurred while copying files:', error));

fs.promises.mkdir(path.dirname(`${appName}/src/components/app/App.test.tsx`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/src/components/app/App.test.tsx`, appTest))
    .catch((error) => console.error('An error occurred while copying files:', error));

fs.promises.mkdir(path.dirname(`${appName}/src/components/landing-page/LandingPage.tsx`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/src/components/landing-page/LandingPage.tsx`, landingPage))
    .catch((error) => console.error('An error occurred while copying files:', error));

fs.promises.mkdir(path.dirname(`${appName}/src/components/landing-page/LandingPage.scss`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/src/components/landing-page/LandingPage.scss`, landingPageSCSS))
    .catch((error) => console.error('An error occurred while copying files:', error));

fs.promises.mkdir(path.dirname(`${appName}/src/components/landing-page/LandingPage.test.tsx`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/src/components/landing-page/LandingPage.test.tsx`, landingPageTest))
    .catch((error) => console.error('An error occurred while copying files:', error));

fs.promises.mkdir(path.dirname(`${appName}/src/components/routes/Routes.tsx`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/src/components/routes/Routes.tsx`, routes))
    .catch((error) => console.error('An error occurred while copying files:', error));

// /build
fs.promises.mkdir(path.dirname(`${appName}/build/server.ts`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/build/server.ts`, server))
    .catch((error) => console.error('An error occurred while copying files:', error));

fs.promises.mkdir(path.dirname(`${appName}/build/webpack.base.config.ts`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/build/webpack.base.config.ts`, webpackBase))
    .catch((error) => console.error('An error occurred while copying files:', error));

fs.promises.mkdir(path.dirname(`${appName}/build/webpack.dev.config.ts`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/build/webpack.dev.config.ts`, webpackDev))
    .catch((error) => console.error('An error occurred while copying files:', error));

fs.promises.mkdir(path.dirname(`${appName}/build/webpack.prod.config.ts`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/build/webpack.prod.config.ts`, webpackProd))
    .catch((error) => console.error('An error occurred while copying files:', error));

console.log('Set up git repository:');

// git init in target location
exec(`cd ${appName} && git init`, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(stdout);
    console.error(stderr);
});

console.log('Install all npm packaged:');

// npm install in target location
exec(`cd ${appName} && npm install`, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(stdout);
    console.error(stderr);
});

console.log('The new app is now available!');
