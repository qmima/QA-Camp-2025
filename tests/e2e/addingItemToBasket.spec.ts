import { ProductsSections } from '../../page-object-model/constants/products-sections';
import { test } from '../../page-object-model/fixtures/HomePageFixture';
import { HomePageProductsSection } from '../../page-object-model/shared-components/home-page-products-section';
import { expect } from '@playwright/test';

test('adding item to basket', async ({ page, homePage }) => {
  
  await homePage.open();

   const homePageProductsSection = new HomePageProductsSection(page);
   const featuredSectionProducts = await homePageProductsSection.getProductsFromSection(ProductsSections.featured);
   const productsDetails = await featuredSectionProducts.getProductDetails('Tropiques Minerale Loose Bronzer');
   
   expect(productsDetails.imageHref).toEqual('//automationteststore.com/image/thumbnails/18/6f/demo_product03_jpg-100094-250x250.jpg');
   expect(productsDetails.price).toEqual('$38.50');
});