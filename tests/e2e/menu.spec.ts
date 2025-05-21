import { expect } from '@playwright/test';
import { test } from '../../page-object-model/fixtures/MenuFixtures';
import { config } from '../../config/globalConfig';

test.only('Check menu', async ({ menu, page }) => {
  
  await page.goto(config.baseURL);
  await menu.checkIfRightMainMenu();
  await menu.checkIfRightSubMenu();
});
