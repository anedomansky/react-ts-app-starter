#!/usr/bin/env node

import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import test from './templates/test'; // file contents

console.log('Copying test.ts...');
console.log(__dirname);
console.log(process.argv);

const appName = process.argv[2];

// copy all necessary files to target location
fs.promises.mkdir(path.dirname(`${appName}/test.ts`), { recursive: true })
    .then(() => fs.promises.writeFile(`${appName}/test.ts`, test))
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
