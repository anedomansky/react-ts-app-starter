import fs from 'fs';
import path from 'path';
import app from '../templates/src/components/app/App';
import appSCSS from '../templates/src/components/app/App.scss';
import appTest from '../templates/src/components/app/App.test';
import landingPage from '../templates/src/components/landing-page/LandingPage';
import landingPageSCSS from '../templates/src/components/landing-page/LandingPage.scss';
import landingPageTest from '../templates/src/components/landing-page/LandingPage.test';
import customRoutes from '../templates/src/components/custom-routes/CustomRoutes';

async function createApp(appName: string): Promise<void> {
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/src/components/app/App.tsx`), { recursive: true });
        await fs.promises.writeFile(`${appName}/src/components/app/App.tsx`, app);
    } catch (error) {
        console.error(`[ERROR] ${error}`);
    }
}

async function createAppSCSS(appName: string): Promise<void> {
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/src/components/app/App.scss`), { recursive: true });
        await fs.promises.writeFile(`${appName}/src/components/app/App.scss`, appSCSS);
    } catch (error) {
        console.error(`[ERROR] ${error}`);
    }
}

async function createAppTest(appName: string): Promise<void> {
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/src/components/app/App.test.tsx`), { recursive: true });
        await fs.promises.writeFile(`${appName}/src/components/app/App.test.tsx`, appTest);
    } catch (error) {
        console.error(`[ERROR] ${error}`);
    }
}

async function createLandingPage(appName: string): Promise<void> {
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/src/components/landing-page/LandingPage.tsx`), { recursive: true });
        await fs.promises.writeFile(`${appName}/src/components/landing-page/LandingPage.tsx`, landingPage);
    } catch (error) {
        console.error(`[ERROR] ${error}`);
    }
}

async function createLandingPageSCSS(appName: string): Promise<void> {
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/src/components/landing-page/LandingPage.scss`), { recursive: true });
        await fs.promises.writeFile(`${appName}/src/components/landing-page/LandingPage.scss`, landingPageSCSS);
    } catch (error) {
        console.error(`[ERROR] ${error}`);
    }
}

async function createLandingPageTest(appName: string): Promise<void> {
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/src/components/landing-page/LandingPage.test.tsx`), { recursive: true });
        await fs.promises.writeFile(`${appName}/src/components/landing-page/LandingPage.test.tsx`, landingPageTest);
    } catch (error) {
        console.error(`[ERROR] ${error}`);
    }
}

async function createCustomRoutes(appName: string): Promise<void> {
    try {
        await fs.promises.mkdir(path.dirname(`${appName}/src/components/custom-routes/CustomRoutes.tsx`), { recursive: true });
        await fs.promises.writeFile(`${appName}/src/components/custom-routes/CustomRoutes.tsx`, customRoutes);
    } catch (error) {
        console.error(`[ERROR] ${error}`);
    }
}

async function createComponentsDirectoryFiles(appName: string): Promise<void> {
    await createApp(appName);
    await createAppSCSS(appName);
    await createAppTest(appName);
    await createLandingPage(appName);
    await createLandingPageSCSS(appName);
    await createLandingPageTest(appName);
    await createCustomRoutes(appName);
}

export default createComponentsDirectoryFiles;
