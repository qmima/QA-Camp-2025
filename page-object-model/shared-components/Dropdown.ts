import { BaseControl } from "./BaseControl";

export class Dropdown extends BaseControl {
  async selectOption(value: string) {
    await this.locator.selectOption({ value });
  }

  async getSelectedOption(): Promise<string | null> {
    const value = await this.locator.inputValue();
    return value;
  }
}