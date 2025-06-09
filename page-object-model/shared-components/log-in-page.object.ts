import { BasePageObject } from './base-page.object';

export class LogInPageObject extends BasePageObject {
  async clickRegisterButton() {
    await this.page.locator("//button[@type='submit' and @title='Continue']").click();
  }
}
