import { test } from '../../page-object-model/fixtures/HomePageFixture';
import { listMenu } from '../../page-object-model/shared-components/menu-elements';

test('Check menu recursively', async ({ menu, homePage}) => {
  
  await homePage.open();
  const xpath = `//*[@id="categorymenu"]/nav/ul/li`;
  await menu.getMenuDetailsRec(listMenu, xpath);

});
