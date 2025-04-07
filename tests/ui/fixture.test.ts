import { test } from '../fixture';

test('has title', async ({ playwrightPage, browserName }) => {
  await playwrightPage.goto();
  await playwrightPage.toHaveTitle();
  console.log(browserName);
});

test('get started link', async ({ playwrightPage }) => {
  await playwrightPage.goto();
  await playwrightPage.clickLink();
  await playwrightPage.toHaveHeading();
});