import fs from 'fs';
import path from 'path';
import fileMock from '../templates/src/__mocks__/fileMock';

async function createMocksDirectoryFiles(appName: string): Promise<void> {
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/src/__mocks__/fileMock.js`), { recursive: true });
        await fs.promises.writeFile(`${appName}/src/__mocks__/fileMock.js`, fileMock);
    } catch (error) {
        console.error(`[ERROR] ${error}`);
    }
}

export default createMocksDirectoryFiles;
