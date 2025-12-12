import { Locator } from '@playwright/test';

export class BaseControl {
  protected locator: Locator;

  constructor(locator: Locator) {
    this.locator = locator;
  }

  async isVisible(): Promise<boolean> {
    return await this.locator.isVisible();
  }

  async isEnabled(): Promise<boolean> {
    return await this.locator.isEnabled();
  }

  async hover() {
    await this.locator.hover();
  }
}