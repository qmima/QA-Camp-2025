import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://howlingtesters.pl/party/');
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.getByRole('textbox', { name: 'Imię postaci:' }).click();
  await page.getByRole('textbox', { name: 'Imię postaci:' }).fill('Asok');
  await page.getByRole('img', { name: 'Czarodziej' }).click();
  await page.getByRole('spinbutton', { name: 'Energia:' }).click();
  await page.getByRole('spinbutton', { name: 'Energia:' }).fill('20');
  await page.getByRole('spinbutton', { name: 'Spryt:' }).click();
  await page.getByRole('spinbutton', { name: 'Spryt:' }).fill('15');
  await page.getByRole('button', { name: 'Dodaj postać' }).click();
  await expect(page.locator('#character-cards')).toContainText('Asok');
  await page.getByText('Rasa: Człowiek', { exact: true }).click();
  await expect(page.locator('#character-cards')).toContainText('Asok Rasa: Człowiek Klasa: Czarodziej Siła: 10 Spryt: 15 Energia: 20 Zdrowie: 10 Usuń');
});