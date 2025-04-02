import { test } from '../fixture';

test('has title', async ({ playwrightPage }) => {
  await playwrightPage.goto();
  await playwrightPage.toHaveTitle();
});

test('get started link', async ({ playwrightPage }) => {
  await playwrightPage.goto();
  await playwrightPage.linkClick();
  await playwrightPage.toHaveHeading();
});