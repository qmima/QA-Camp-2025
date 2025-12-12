import { expect } from '@playwright/test';
import { test } from '../page-object-model/fixtures/HomePageFixture';

test('Open Page', async ({ homePage }) => {
  await homePage.open();
});

test('test', async ({ homePage, page }) => {
  await homePage.open();

  await page.getByRole('textbox', { name: 'Imię postaci:' }).fill('imiePostaci');
  await page.getByRole('button', { name: 'Dodaj postać' }).click();

  await homePage.popup.validatePopup();
});