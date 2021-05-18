#!/usr/bin/env node

import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import index from './templates/src/index';
import indexHTML from './templates/src/index.html';
import indexSCSS from './templates/src/index.scss';
import setupTests from './templates/src/setupTests';
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
import createRootDirectoryFiles from './helpers/root-directory-files';
import createMocksDirectoryFiles from './helpers/mocks-directory-files';

console.log(__dirname);
console.log(process.argv);

const appName = process.argv[2];

console.log(`Creating all files in ${appName}`);

createRootDirectoryFiles(appName).then(() => console.log('All root level files were created successfully!'));

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

createMocksDirectoryFiles(appName).then(() => console.log('All __mocks__ directory files were created successfully!'));

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
