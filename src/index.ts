#!/usr/bin/env node

import createRootDirectoryFiles from './helpers/root-directory-files';
import createMocksDirectoryFiles from './helpers/mocks-directory-files';
import createSrcDirectoryFiles from './helpers/src-directory-files';
import createBuildDirectoryFiles from './helpers/build-directory-files';
import createComponentsDirectoryFiles from './helpers/components-directory-files';
import execShellCommand from './helpers/shellCmd';

const appName = process.argv[2];

console.log(`[INFO] Creating all files in ${appName}`);

createRootDirectoryFiles(appName).then(() => console.log('[INFO] All root level files were created'));

createBuildDirectoryFiles(appName).then(() => console.log('[INFO] All build directory files were created'));

createSrcDirectoryFiles(appName).then(() => console.log('[INFO] All src directory files were created'));

createMocksDirectoryFiles(appName).then(() => console.log('[INFO] All __mocks__ directory files were created'));

createComponentsDirectoryFiles(appName).then(() => console.log('[INFO] All component files were created'));

// git init in target location
execShellCommand(`cd ${appName} && git init`).then(() => console.log('[INFO] git repository was created')).catch((error) => console.error(`[ERROR] ${error}`));

// npm install in target location
execShellCommand(`cd ${appName} && npm install`).then(() => console.log('[INFO] npm dependencies installed')).catch((error) => console.error(`[ERROR] ${error}`));
