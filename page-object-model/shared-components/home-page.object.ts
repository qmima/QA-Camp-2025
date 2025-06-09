import { expect, Page } from '@playwright/test';
import { LogInPageObject } from './log-in-page.object';
import { BasePageObject } from './base-page.object';

export class HomePageObject extends BasePageObject {
  async open() {
    await this.navigateTo();
    await this.checkIfOpen();
    await this.toHaveTitle('A place to practice your automation skills!');
  }

  async goToLogInPage() {
    await this.page.locator("//ul[@id='customer_menu_top']").click();
    return new LogInPageObject(this.page, this.url);
  }
}
