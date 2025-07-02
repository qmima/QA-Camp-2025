import { Page } from "@playwright/test";
import { HomePageProducts } from "./home-page-products";

export class HomePageProductsSection {
  constructor(private page: Page) {}

  async getProductFromSection(productSectionName: string): Promise<HomePageProducts> {
    const productSection = this.page.locator(
      'div.block_frame:has(h1.heading1 span.maintext:has-text("' + productSectionName + '"))'
    ).first();

    await productSection.scrollIntoViewIfNeeded();
    await productSection.waitFor();

    return new HomePageProducts(this.page, productSection);
  }
}