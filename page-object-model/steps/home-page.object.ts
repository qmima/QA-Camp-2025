import { Page } from '@playwright/test';
import { BasePageObject } from '../page-objects/base-page.object';
import { PopupElement } from '../page-objects/Popup';

export class HomePageObject extends BasePageObject {
  popup: PopupElement;
  
  constructor(page: Page, url: string) {
    super(page, url);
    this.page = page;
    this.popup = new PopupElement(page)
  }
  
  async open(): Promise<void> {
    await this.navigateTo();
    await this.checkIfOpen();
    await this.closeCookie();
  }
  
  async closeCookie() {
    await this.page.getByRole('button', { name: 'Reject All' }).click();
  }
}