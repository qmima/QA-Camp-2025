import { test as base } from '@playwright/test';
import { PlaywrightPage } from './PlaywrightPage';

export const test = base.extend<{ playwrightPage: PlaywrightPage }>({
    playwrightPage: async ({ page }, use) => {
        const playwrightPage = new PlaywrightPage(page);
        await use(playwrightPage);
    }
});