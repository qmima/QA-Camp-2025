import { test } from '../../page-object-model/fixtures/HomePageFixture';
import { listMenu } from '../../page-object-model/shared-components/menu-elements';


test('Check menu', async ({ homePage, page }) => {
  
  await homePage.open();
  await homePage.getMenuDetails(listMenu);
});


test('Check menu recursively', async ({ homePage, page }) => {
  
  await homePage.open();
  const xpath = `//*[@id="categorymenu"]/nav/ul/li`;
  await homePage.getMenuDetailsRec(listMenu, xpath);

});
