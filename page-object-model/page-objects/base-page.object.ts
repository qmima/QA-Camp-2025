import { expect, Page } from '@playwright/test';

export class BasePageObject {
  protected page: Page;
  protected url: string;

  constructor(page: Page, url: string) {
    this.page = page;
    this.url = url;
  }

  async getURL() {
    return this.page.url();
  }

  async toHaveTitle(titleToBe) {
    await expect(this.page).toHaveTitle(titleToBe);
  }

  async checkIfOpen() {
    await this.page.waitForSelector('body');
  }

  async navigateTo(urlToGo = this.url) {
    await this.page.goto(urlToGo);
  }

  async fillInputID(inputID, inputText) {
    await this.page.fill(`input#${inputID}`, inputText);
  }

  async interactwith(DOMelement, selectorID, optionalText?) {
    if (DOMelement == 'input') {
      await this.page.fill(`input#${selectorID}`, optionalText);
    } else if (DOMelement == 'selector') {
      await this.page.locator(`select#${selectorID}`).selectOption(optionalText);
    } else if (DOMelement == 'checkbox') {
      await this.page.locator(`input#${selectorID}`).check();
    }
  }
}
