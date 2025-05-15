import { Page, expect } from '@playwright/test';
import { currency } from '../shared-components/Currency';

export class MainPageSteps {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async chooseCurrency(newCurrency: { name: string; symbol: string }) {
    let currencyMenu = this.page.locator('ul.language');
    await currencyMenu.hover();

    let option = this.page
      .getByRole('listitem')
      .filter({ hasText: `${newCurrency.symbol} ${newCurrency.name}` })
      .nth(1);
    await option.click();
    
    currency.changeCurrency(newCurrency.symbol);
  }

  public async verifyCurrency() {
    let symbol = await this.page.textContent('a.dropdown-toggle span.label');
    expect(symbol).toBe(currency.getCurrency());
  }
}