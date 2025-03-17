import { Locator, Page } from "@playwright/test";

export class mainPage {
    readonly page: Page;
    readonly getStartedLink: Locator;
    constructor(page: Page) {
        this.page = page
    }
}
