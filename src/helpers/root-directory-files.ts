import fs from 'fs';
import path from 'path';
import packageJSON from '../templates/package.json';
import tsconfig from '../templates/tsconfig.json';
import assetsTypes from '../templates/assets.types';
import env from '../templates/env';
import eslintConfig from '../templates/eslintrc.json';
import gitattributes from '../templates/gitattributes';
import gitignore from '../templates/gitignore';
import README from '../templates/README.md';
import babelConfig from '../templates/babel.config';
import jestConfig from '../templates/jest.config';

async function createPackageJSON(appName: string): Promise<void> {
    const updatedPackageJSON = JSON.parse(packageJSON);
    updatedPackageJSON.name = appName;
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/package.json`), { recursive: true });
        await fs.promises.writeFile(`${appName}/package.json`, JSON.stringify(updatedPackageJSON, null, 2));
    } catch (error) {
        console.error(error);
    }
}

async function createTsconfigJSON(appName: string): Promise<void> {
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/tsconfig.json`), { recursive: true });
        await fs.promises.writeFile(`${appName}/tsconfig.json`, tsconfig);
    } catch (error) {
        console.error(error);
    }
}

async function createAssetsTypes(appName: string): Promise<void> {
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/assets.d.ts`), { recursive: true });
        await fs.promises.writeFile(`${appName}/assets.d.ts`, assetsTypes);
    } catch (error) {
        console.error(error);
    }
}

async function createEnv(appName: string): Promise<void> {
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/.env`), { recursive: true });
        await fs.promises.writeFile(`${appName}/.env`, env);
    } catch (error) {
        console.error(error);
    }
}

async function createEslintrcJSON(appName: string): Promise<void> {
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/.eslintrc.json`), { recursive: true });
        await fs.promises.writeFile(`${appName}/.eslintrc.json`, eslintConfig);
    } catch (error) {
        console.error(error);
    }
}

async function createGitattributes(appName: string): Promise<void> {
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/.gitattributes`), { recursive: true });
        await fs.promises.writeFile(`${appName}/.gitattributes`, gitattributes);
    } catch (error) {
        console.error(error);
    }
}

async function createGitignore(appName: string): Promise<void> {
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/.gitignore`), { recursive: true });
        await fs.promises.writeFile(`${appName}/.gitignore`, gitignore);
    } catch (error) {
        console.error(error);
    }
}

async function createREADME(appName: string): Promise<void> {
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/README.md`), { recursive: true });
        await fs.promises.writeFile(`${appName}/README.md`, README);
    } catch (error) {
        console.error(error);
    }
}

async function createBabelConfig(appName: string) {
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/babel.config.js`), { recursive: true });
        await fs.promises.writeFile(`${appName}/babel.config.js`, babelConfig);
    } catch (error) {
        console.error(error);
    }
}

async function createJestConfig(appName: string) {
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/jest.config.js`), { recursive: true });
        await fs.promises.writeFile(`${appName}/jest.config.js`, jestConfig);
    } catch (error) {
        console.error(error);
    }
}

async function createRootDirectoryFiles(appName: string): Promise<void> {
    await createPackageJSON(appName);
    await createTsconfigJSON(appName);
    await createAssetsTypes(appName);
    await createEnv(appName);
    await createEslintrcJSON(appName);
    await createGitattributes(appName);
    await createGitignore(appName);
    await createREADME(appName);
    await createBabelConfig(appName);
    await createJestConfig(appName);
}

export default createRootDirectoryFiles;
