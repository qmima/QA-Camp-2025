import test from '@playwright/test';
import { MainPageSteps } from '../../page-object-model/steps/main-page.steps';
import { config } from '../../config/globalConfig';
import { currencies } from '../../page-object-model/constants/currency';

test.only('currency change and log API response', async ({ page}) => {
  const mainPageSteps = new MainPageSteps(page);

  await page.goto(config.baseURL);
  await mainPageSteps.chooseCurrency(currencies[0]);
  await mainPageSteps.chooseCurrency(currencies[1]);
   
 page.on("response", (data) => {
  console.log(data.status());
  console.log(data.request().method());
    });
 
});