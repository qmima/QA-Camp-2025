import { Page, expect } from '@playwright/test';

export class PlaywrightPage {
    constructor(private page: Page) {}

    async goto() {
        await this.page.goto('https://playwright.dev/');
    }

    async toHaveTitle() {
        await expect(this.page).toHaveTitle(/Playwright/);
    }

    async linkClick() {
        await this.page.getByRole('link', { name: 'Get started' }).click();
    }

    async toHaveHeading() {
        await expect(this.page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    }
}