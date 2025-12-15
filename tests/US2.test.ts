import { test } from '../page-object-model/fixtures/automation-test.fixture';

test('US2 test', async ({ homePage, page }) => {
  await homePage.open();
  await page.getByRole('textbox', { name: 'Imię postaci:' }).fill('Postać_01');
  await page.getByRole('button', { name: 'Dodaj postać' }).click();

  await homePage.popup.validatePopup();
});
