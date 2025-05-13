import { test, expect } from '@playwright/test';
import { currency } from '../Currency';

test('currency change and verification', async ({ page }) => {
  const curriences = [
    { name: 'Euro', symbol: '€' },
    { name: 'US Dollar', symbol: '$' },
    { name: 'Pound Sterling', symbol: '£' }
  ];

  await page.goto('https://automationteststore.com/');

  // let menu = await page.locator('ul.language');
  // await menu.hover();

  // let option = await page.locator('ul.currency li').nth(0);
  // await option.click();

  // let symbol = await page.textContent('a.dropdown-toggle span.label');
  // await expect(symbol).toBe('€');

  for (let i = 0; i < curriences.length; ++i) {
    let item = curriences[i];

    let currencyMenu = page.locator('ul.language');
    await currencyMenu.hover();

    let option = page
      .getByRole('listitem')
      .filter({ hasText: item.symbol + ' ' + item.name })
      .nth(1);
    await option.click();
    currency.changeCurrency(item.symbol);

    let symbol = await page.textContent('a.dropdown-toggle span.label');
    expect(symbol).toBe(currency.getCurrency());
  }
});