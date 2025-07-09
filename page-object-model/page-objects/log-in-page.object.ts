import { BasePageObject } from './base-page.object';

export class LogInPageObject extends BasePageObject {
  async selectInputID(selectorID, optionID) {
    const selectLocator = this.page.locator(`select#${selectorID}`);
    await selectLocator.selectOption(optionID);
  }

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

  async fillTelephone(name) {
    await this.fillInputID('AccountFrm_telephone', name);
  }

  async fillFax(name) {
    await this.fillInputID('AccountFrm_fax', name);
  }

  async fillCompany(name) {
    await this.fillInputID('AccountFrm_company', name);
  }

  async fillAdress1(name) {
    await this.fillInputID('AccountFrm_address_1', name);
  }

  async fillAdress2(name) {
    await this.fillInputID('AccountFrm_address_2', name);
  }

  async fillCity(name) {
    await this.fillInputID('AccountFrm_city', name);
  }

  async selectRegion(selectedOption) {
    await this.selectInputID('AccountFrm_zone_id', selectedOption);
  }

  async fillZipCode(name) {
    await this.fillInputID('AccountFrm_postcode', name);
  }

  async selectCountry(selectedOption) {
    await this.selectInputID('AccountFrm_country_id', selectedOption);
  }

  async fillUserName(name) {
    await this.fillInputID('AccountFrm_loginname', name);
  }

  async fillPassword(name) {
    await this.fillInputID('AccountFrm_password', name);
  }

  async fillPasswordConfirm(name) {
    await this.fillInputID('AccountFrm_confirm', name);
  }

  async conirmationMessage() {
    await this.page
      .locator('//span[contains(text(), "Your Account Has Been Created!")]')
      .waitFor({ state: 'visible' });
  }
}
