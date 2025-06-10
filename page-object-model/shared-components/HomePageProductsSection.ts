import { Page } from "@playwright/test";

export class HomePageProductsSection {
      constructor(private page: Page) {}

     async getProductSection(productSectionName: string) {
         const productSection = this.page.locator('.heading1').filter({
           has: this.page.locator('.maintext', { hasText: productSectionName }),
         });
        
  
       }

}