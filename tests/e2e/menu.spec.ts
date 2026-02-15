import { test } from '../../page-object-model/fixtures/automation-test.fixture';
import { listMenu } from '../../page-object-model/steps/menu-elements';

test('Check menu recursively', async ({ menu, homePage }) => {
  await homePage.open();
  const xpath = `//*[@id="categorymenu"]/nav/ul/li`;
  await menu.getMenuDetailsRec(listMenu, xpath);
});
