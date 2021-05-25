import fs from 'fs';
import path from 'path';
import server from '../templates/build/server';
import webpackBase from '../templates/build/webpack.base.config';
import webpackDev from '../templates/build/webpack.dev.config';
import webpackProd from '../templates/build/webpack.prod.config';

async function createServer(appName: string): Promise<void> {
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/build/server.ts`), { recursive: true });
        await fs.promises.writeFile(`${appName}/build/server.ts`, server);
    } catch (error) {
        console.error(`[ERROR] ${error}`);
    }
}

async function createWebpackBaseConfig(appName: string): Promise<void> {
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/build/webpack.base.config.ts`), { recursive: true });
        await fs.promises.writeFile(`${appName}/build/webpack.base.config.ts`, webpackBase);
    } catch (error) {
        console.error(`[ERROR] ${error}`);
    }
}

async function createWebpackDevConfig(appName: string): Promise<void> {
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/build/webpack.dev.config.ts`), { recursive: true });
        await fs.promises.writeFile(`${appName}/build/webpack.dev.config.ts`, webpackDev);
    } catch (error) {
        console.error(`[ERROR] ${error}`);
    }
}

async function createWebpackProdConfig(appName: string): Promise<void> {
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/build/webpack.prod.config.ts`), { recursive: true });
        await fs.promises.writeFile(`${appName}/build/webpack.prod.config.ts`, webpackProd);
    } catch (error) {
        console.error(`[ERROR] ${error}`);
    }
}

async function createBuildDirectoryFiles(appName: string): Promise<void> {
    await createServer(appName);
    await createWebpackBaseConfig(appName);
    await createWebpackDevConfig(appName);
    await createWebpackProdConfig(appName);
}

export default createBuildDirectoryFiles;
