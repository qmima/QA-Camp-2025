import { test, expect } from '@playwright/test';

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
    let currency = curriences[i];

    let menu = await page.locator('ul.language');
    await menu.hover();

    let option = await page
      .getByRole('listitem')
      .filter({ hasText: currency.symbol + ' ' + currency.name })
      .nth(1);
    await option.click();

    let symbol = await page.textContent('a.dropdown-toggle span.label');
    await expect(symbol).toBe(currency.symbol);
  }
});
