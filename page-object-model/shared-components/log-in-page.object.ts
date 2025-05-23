import { Page } from '@playwright/test';

export class LogInPageObject {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goToLogInPage() {
    await this.page.locator("//ul[@id='customer_menu_top']").click();
  }
}
