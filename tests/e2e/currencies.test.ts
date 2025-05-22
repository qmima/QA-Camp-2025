import test from '@playwright/test';
import { MainPageSteps } from '../../page-object-model/steps/main-page.steps';
import { config } from '../../config/globalConfig';
import { currencies } from '../../page-object-model/constants/currency';

test('currency change and verification', async ({ page }) => {
  const mainPageSteps = new MainPageSteps(page);

  await page.goto(config.baseURL);

  for (let i = 0; i < currencies.length; ++i) {
    await mainPageSteps.chooseCurrency(currencies[i]);
    await mainPageSteps.verifyCurrency();
  }
});