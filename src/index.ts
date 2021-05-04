#!/usr/bin/env node

import fs from 'fs';
import test from './templates/test'; // file contents

console.log('Copying test.ts...');
console.log(__dirname);

// writes file contents to file in current directory - use path.join(__dirname, '/subdirectory/test.ts')
fs.writeFile('test.ts', test, (error) => {
    if (error) {
        console.error(error);
    }
});
