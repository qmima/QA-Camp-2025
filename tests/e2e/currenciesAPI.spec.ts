import test from '@playwright/test';
import { MainPageSteps } from '../../page-object-model/steps/main-page.steps';
import { config } from '../../config/globalConfig';
import { currencies } from '../../page-object-model/constants/currency';

test('currency change and log API response', async ({ page}) => {
  const mainPageSteps = new MainPageSteps(page);

  await page.goto(config.baseURL);
  await page.goto('https://automationteststore.com/index.php?rt=product/product&product_id=92&currency=USD');
  await mainPageSteps.chooseCurrency(currencies[0]);
 /*
  await page.on("response", (data) => {

  console.log(data.status());
  console.log(data.request().method());
  console.log(data.url());
    });
 */  
  const responsePromise = page.waitForResponse(response =>
  response.url().includes('/product/product/calculateTotal'));

  await mainPageSteps.chooseCurrency(currencies[1]);

  const response = await responsePromise;
  /*
  await new Promise(function (r) {
    setTimeout(r, 3000);
  });
 */
  console.log(response.request().method());
  console.log(response.url());
 
});