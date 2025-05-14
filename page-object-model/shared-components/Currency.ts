class Currency {
  private static instance: Currency;
  private actualCurrency: string;

  private constructor() {
    this.actualCurrency = '$';
  }

  public static getInstance(): Currency {
    if (!Currency.instance) {
      Currency.instance = new Currency();
    }
    return Currency.instance;
  }

  public changeCurrency(newCurrency: string) {
    this.actualCurrency = newCurrency;
  }

  public getCurrency() {
    return this.actualCurrency;
  }
}

export const currency = Currency.getInstance();