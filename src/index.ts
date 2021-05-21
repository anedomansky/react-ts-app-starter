#!/usr/bin/env node

import { exec } from 'child_process';
import createRootDirectoryFiles from './helpers/root-directory-files';
import createMocksDirectoryFiles from './helpers/mocks-directory-files';
import createSrcDirectoryFiles from './helpers/src-directory-files';
import createBuildDirectoryFiles from './helpers/build-directory-files';
import createComponentsDirectoryFiles from './helpers/components-directory-files';

console.log(__dirname);
console.log(process.argv);

const appName = process.argv[2];

console.log(`Creating all files in ${appName}`);

createRootDirectoryFiles(appName).then(() => console.log('All root level files were created successfully!'));

createBuildDirectoryFiles(appName).then(() => console.log('All build directory files were created successfully!'));

createSrcDirectoryFiles(appName).then(() => console.log('All src directory files were created successfully!'));

createMocksDirectoryFiles(appName).then(() => console.log('All __mocks__ directory files were created successfully!'));

createComponentsDirectoryFiles(appName).then(() => console.log('All component files were created successfully!'));

function execShellCommand(cmd: string): Promise<string> {
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                reject(error);
            }
            resolve(stdout || stderr);
        });
    });
}

// git init in target location
execShellCommand(`cd ${appName} && git init`).then(() => console.log('git respoitory was created successfully!')).catch((error) => console.error(error));

// npm install in target location
execShellCommand(`cd ${appName} && npm install`).then(() => console.log('npm dependencies were installed successfully!')).catch((error) => console.error(error));
