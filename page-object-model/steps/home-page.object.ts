import { LogInPageObject } from './log-in-page.object';
import { BasePageObject } from '../page-objects/base-page.object';

export class HomePageObject extends BasePageObject {
  async open() {
    await this.navigateTo();
    await this.checkIfOpen();
    await this.toHaveTitle('A place to practice your automation skills!');
  }

  async goToLogInPage(): Promise<LogInPageObject> {
    await this.page.locator('ul#customer_menu_top').click();
    return new LogInPageObject(this.page, this.url);
  }
}
