import test from '@playwright/test';
import { MainPageSteps } from '../main-page.steps';
import { config } from '../../config/globalConfig';

test('currency change and verification', async ({ page }) => {
  const curriences = [
    { name: 'Euro', symbol: '€' },
    { name: 'US Dollar', symbol: '$' },
    { name: 'Pound Sterling', symbol: '£' },
  ];

  const mainPageSteps = new MainPageSteps(page);

  await page.goto(config.baseURL);

  for (let i = 0; i < curriences.length; ++i) {
    await mainPageSteps.chooseCurrency(curriences[i]);
    await mainPageSteps.verifyCurrency();
  }
});