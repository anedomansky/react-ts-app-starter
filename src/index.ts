#!/usr/bin/env node

import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import packageJSON from './templates/package.json';
import tsconfig from './templates/tsconfig.json';
import index from './templates/src/index';
import indexHTML from './templates/src/index.html';
import indexSCSS from './templates/src/index.scss';
import app from './templates/src/app/App';
import server from './templates/build/server';
import webpackBase from './templates/build/webpack.base.config';
import webpackDev from './templates/build/webpack.dev.config';
import webpackProd from './templates/build/webpack.prod.config';

console.log('Creating all files...');
console.log(__dirname);
console.log(process.argv);

const appName = process.argv[2];

// /
fs.promises.mkdir(path.dirname(`${appName}/package.json`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/package.json`, packageJSON))
    .catch((error) => console.error('An error occurred while copying files:', error));

fs.promises.mkdir(path.dirname(`${appName}/tsconfig.json`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/tsconfig.json`, tsconfig))
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

fs.promises.mkdir(path.dirname(`${appName}/src/app/App.tsx`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/src/app/App.tsx`, app))
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

// git init in target location
exec(`cd ${appName} && git init`, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(stdout);
    console.error(stderr);
});
