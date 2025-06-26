import { expect } from '@playwright/test';
import { test } from '../../page-object-model/fixtures/MenuFixtures';
import { config } from '../../config/globalConfig';
import { Menu } from '../../page-object-model/shared-components/Menu';
import { MenuRecursion } from '../../page-object-model/shared-components/MenuRecursion';
import { listMenu } from '../../page-object-model/shared-components/menu-elements';


test('Check menu', async ({ menu, page }) => {
  
  await page.goto(config.baseURL);

  await new Menu(page).getMenuDetails(listMenu);
  

});


test('Check menu recursively', async ({ menu, page }) => {
  
  await page.goto(config.baseURL);
  const xpath = `//*[@id="categorymenu"]/nav/ul/li`;
  await new MenuRecursion(page).getMenuDetailsRec(listMenu, xpath);
  

});
