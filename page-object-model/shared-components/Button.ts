import { BaseControl } from "./BaseControl";

export class Button extends BaseControl {
  async click() {
    await this.locator.click();
  }
}