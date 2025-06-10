import { test, expect } from '@playwright/test';
import { HomePageProducts } from '../../page-object-model/shared-components/HomePageProducts';
import { config } from '../../config/globalConfig';

test('adding item to basket', async ({ page }) => {
  
 // const url = 'https://automationteststore.com/';
  
  const productName = 'Tropiques Minerale Loose Bronzer';

  await page.goto(config.baseURL);

  const homePageProducts = new HomePageProducts(page); 
  const productDetails = await homePageProducts.getProductDetails(productName);
   
   expect(productDetails.title).toEqual(productName);
   expect(productDetails.imageHref).toEqual('//automationteststore.com/image/thumbnails/18/6f/demo_product03_jpg-100094-250x250.jpg');
   expect(productDetails.price).toEqual('$38.50');
});
