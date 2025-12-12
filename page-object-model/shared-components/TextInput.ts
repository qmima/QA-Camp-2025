import { BaseControl } from "./BaseControl";

export class TextInput extends BaseControl {
  async fill(value: string) {
    await this.locator.fill(value);
  }

  async getValue(): Promise<string> {
    return await this.locator.inputValue();
  }
}