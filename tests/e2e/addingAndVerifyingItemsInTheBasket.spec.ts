import { expect } from '@playwright/test';
import { test } from '../../page-object-model/fixtures/automation-test.fixture';
import { Product } from '../../page-object-model/constants/product';
import { HomePageProductsSection } from '../../page-object-model/steps/home-page-products-section';
import { ProductPageCard } from '../../page-object-model/steps/product-page-card';
import { HoverProductCard } from '../../page-object-model/steps/hover-product-card';
import { ProductData } from '../../page-object-model/constants/product-data';
import { ProductsSections } from '../../page-object-model/constants/products-sections';

test('adding and verifying items in the basket', async ({ page, homePage }) => {
  await homePage.open();

   const homePageProductsSection = new HomePageProductsSection(page);
   const featuredSectionProducts = await homePageProductsSection.getProductsFromSection(ProductsSections.featured);
   const productsDetails = await featuredSectionProducts.getProductDetails('Tropiques Minerale Loose Bronzer');

   const expectedProduct = new Product(
    ProductData.imageHref,
    ProductData.price,
    ProductData.title
  );

  expect(productsDetails.imageHref).toEqual(expectedProduct.getImageHref());
  expect(productsDetails.price).toEqual(expectedProduct.getPrice());

  const productPageCard = new ProductPageCard(page);
  await productPageCard.addProductToBasket('Add to Cart');

  // Verify that the product was added to the basket
  const hoverProductCard = new HoverProductCard(page);
  const basketItems = await hoverProductCard.getHoverProductCard();

  expect(basketItems.imageHref).toEqual(expectedProduct.getImageHref());
  expect(basketItems.price).toEqual(expectedProduct.getPrice());
  expect(basketItems.title).toEqual(expectedProduct.getTitle());
});