import { faker } from '@faker-js/faker';
import { UserBuilder } from '../constants/user';
import { BasePageObject } from './base-page.object';

export class LogInPageObject extends BasePageObject {
  async clickRegisterButton() {
    await this.page.locator("//button[@type='submit' and @title='Continue']").click();
  }
  async fillFirstName(name) {
    await this.fillInputID('AccountFrm_firstname', name);
  }

  async fillLastName(name) {
    await this.fillInputID('AccountFrm_lastname', name);
  }

  async fillEmail(name) {
    await this.fillInputID('AccountFrm_email', name);
  }

  async fillAdress(name) {
    await this.fillInputID('AccountFrm_address_1', name);
  }

  async fillCity(name) {
    await this.fillInputID('AccountFrm_city', name);
  }
}
