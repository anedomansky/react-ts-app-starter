import fs from 'fs';
import path from 'path';
import index from '../templates/src/index';
import indexHTML from '../templates/src/index.html';
import indexSCSS from '../templates/src/index.scss';
import setupTests from '../templates/src/setupTests';

async function createIndex(appName: string): Promise<void> {
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/src/index.tsx`), { recursive: true });
        await fs.promises.writeFile(`${appName}/src/index.tsx`, index);
    } catch (error) {
        console.error(error);
    }
}

async function createIndexHTML(appName: string): Promise<void> {
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/src/index.html`), { recursive: true });
        await fs.promises.writeFile(`${appName}/src/index.html`, indexHTML);
    } catch (error) {
        console.error(error);
    }
}

async function createIndexSCSS(appName: string): Promise<void> {
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/src/index.scss`), { recursive: true });
        await fs.promises.writeFile(`${appName}/src/index.scss`, indexSCSS);
    } catch (error) {
        console.error(error);
    }
}

async function createSetupTests(appName: string): Promise<void> {
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/src/setupTests.ts`), { recursive: true });
        await fs.promises.writeFile(`${appName}/src/setupTests.ts`, setupTests);
    } catch (error) {
        console.error(error);
    }
}

async function createSrcDirectoryFiles(appName: string): Promise<void> {
    await createIndex(appName);
    await createIndexHTML(appName);
    await createIndexSCSS(appName);
    await createSetupTests(appName);
}

export default createSrcDirectoryFiles;
