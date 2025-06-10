import { Page } from "@playwright/test";

   export class HomePageProducts {
      constructor(private page: Page) {}

       async getProductDetails(productName: string) {
         const productCard = this.page.locator('.col-md-3').filter({
           has: this.page.locator('.prdocutname', { hasText: productName }),
         }).first();
        
         const imageHref = await productCard.locator('.thumbnail a img').getAttribute('src');
         const price = await productCard.locator('.price .oneprice').innerText();
         
         await productCard.locator('.productcart').click();
        
         return {
           title: productName,
           imageHref,
           price,
         };
       }
   }