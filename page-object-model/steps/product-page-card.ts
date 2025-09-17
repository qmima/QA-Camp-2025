import { Locator, Page } from "@playwright/test";

export class ProductPageCard {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addProductToBasket(productName: string): Promise<void> {

     await this.page.locator(`.productpagecart`).click();
  }
}