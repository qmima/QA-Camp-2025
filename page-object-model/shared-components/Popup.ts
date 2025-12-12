import { expect, Page } from '@playwright/test';
import { BasePageObject } from '../page-objects/base-page.object';

export class PopupElement {
  page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }
  
  async validatePopup() {
    await expect(this.page.locator('#popup-title')).toContainText('Niepełne punkty');
    await expect(this.page.locator('#popup-message')).toContainText('Nie można utworzyć postaci. Pozostało 15 punktów do rozdania!');
    await expect(this.page.locator('#popup-close')).toContainText('Zamknij');
  }
}