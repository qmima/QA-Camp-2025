import { test } from '@playwright/test';

test('US6 test', async ({ page }) => {
  await page.goto('https://howlingtesters.pl/party/');
  await page.getByRole('button', { name: 'Reject All' }).click();

  await page.getByRole('textbox', { name: 'Imię postaci:' }).fill('Postac1');
  await page.locator('#character-creator div').filter({ hasText: 'Wojownik' }).nth(1).click();
  await page.getByRole('spinbutton', { name: 'Siła:' }).fill('20');
  await page.getByRole('spinbutton', { name: 'Zdrowie:' }).fill('15');
  await page.getByRole('button', { name: 'Dodaj postać' }).click();

  await page.getByRole('textbox', { name: 'Imię postaci:' }).fill('Postac2');
  await page.getByLabel('Rasa:').selectOption('Ork');
  await page.getByRole('img', { name: 'Łotrzyk' }).click();
  await page.getByRole('spinbutton', { name: 'Siła:' }).fill('15');
  await page.getByRole('spinbutton', { name: 'Spryt:' }).fill('20');
  await page.getByRole('button', { name: 'Dodaj postać' }).click();

  await page.getByRole('textbox', { name: 'Imię postaci:' }).fill('Postac3');
  await page.getByLabel('Rasa:').selectOption('Elf');
  await page.getByRole('img', { name: 'Czarodziej' }).click();
  await page.getByRole('spinbutton', { name: 'Energia:' }).fill('25');
  await page.getByRole('spinbutton', { name: 'Spryt:' }).fill('15');
  await page.getByRole('button', { name: 'Dodaj postać' }).click();

  await page.getByRole('textbox', { name: 'Imię postaci:' }).fill('Postac4');
  await page.getByLabel('Rasa:').selectOption('Krasnolud');
  await page.getByRole('img', { name: 'Zwiadowca' }).click();
  await page.getByRole('spinbutton', { name: 'Siła:' }).fill('5');
  await page.getByRole('spinbutton', { name: 'Spryt:' }).fill('20');
  await page.getByRole('spinbutton', { name: 'Energia:' }).fill('15');
  await page.getByRole('spinbutton', { name: 'Zdrowie:' }).fill('15');
  await page.getByRole('button', { name: 'Dodaj postać' }).click();
});
