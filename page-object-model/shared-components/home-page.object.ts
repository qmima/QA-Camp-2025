import { expect, Page } from '@playwright/test';
import { LogInPageObject } from './log-in-page.object';

export class HomePageObject {
  page: Page;
  private url: string;

  constructor(page: Page, url: string) {
    this.page = page;
    this.url = url;
  }

  private async checkIfOpen() {
    await this.page.waitForSelector('body');
  }

  async toHaveTitle() {
    await expect(this.page).toHaveTitle('A place to practice your automation skills!');
  }

  async open() {
    await this.page.goto(this.url);
    await this.checkIfOpen();
    await this.toHaveTitle();
  }

  async goToLogInPage() {
    await this.page.locator("//ul[@id='customer_menu_top']").click();
    return new LogInPageObject(this.page);
  }
}
