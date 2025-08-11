import { BasePageObject } from '../page-objects/base-page.object';

export class LogInPageObject extends BasePageObject {
  async selectInputID(selectorID, optionID) {
    const selectLocator = this.page.locator(`select#${selectorID}`);
    await selectLocator.selectOption(optionID);
  }

  async clickRegisterButton() {
    await this.page.locator("//button[@type='submit' and @title='Continue']").click();
  }

  async fillFirstName(firstName) {
    await this.fillInputID('AccountFrm_firstname', firstName);
  }

  async getFirstName() {
    return this.page.locator('input#AccountFrm_firstname').inputValue();
  }

  async fillLastName(LastName) {
    await this.fillInputID('AccountFrm_lastname', LastName);
  }

  async fillEmail(email) {
    await this.fillInputID('AccountFrm_email', email);
  }

  async fillTelephone(telephoneNumber) {
    await this.fillInputID('AccountFrm_telephone', telephoneNumber);
  }

  async fillFax(faxNumber) {
    await this.fillInputID('AccountFrm_fax', faxNumber);
  }

  async fillCompany(CompanyName) {
    await this.fillInputID('AccountFrm_company', CompanyName);
  }

  async fillAdress1(Adress) {
    await this.fillInputID('AccountFrm_address_1', Adress);
  }

  async fillAdress2(Adress) {
    await this.fillInputID('AccountFrm_address_2', Adress);
  }

  async fillCity(cityName) {
    await this.fillInputID('AccountFrm_city', cityName);
  }

  async selectRegion(selectRegion) {
    await this.selectInputID('AccountFrm_zone_id', selectRegion);
  }

  async fillZipCode(zipCode) {
    await this.fillInputID('AccountFrm_postcode', zipCode);
  }

  async selectCountry(selectCounty) {
    await this.selectInputID('AccountFrm_country_id', selectCounty);
  }

  async fillUserName(userName) {
    await this.fillInputID('AccountFrm_loginname', userName);
  }

  async fillPassword(password) {
    await this.fillInputID('AccountFrm_password', password);
  }

  async fillPasswordConfirm(password) {
    await this.fillInputID('AccountFrm_confirm', password);
  }

  async checkSubscribeYesButton() {
    await this.page.locator('input#AccountFrm_newsletter1').click();
  }

  async checkSubscribeNoButton() {
    await this.page.locator('input#AccountFrm_newsletter0').click();
  }

  async checkPolicyCheckbox() {
    await this.page.locator('input#AccountFrm_agree').click();
  }

  async confirmationMessage() {
    return await this.page.textContent('.maintext');
  }

  async fillAllUserData(user, country, region) {
    await this.fillFirstName(user.firstName);
    await this.fillLastName(user.lastName);
    await this.fillEmail(user.email);
    await this.fillTelephone(user.telephone);
    await this.fillFax(user.fax);
    await this.fillCompany(user.company);
    await this.fillAdress1(user.adress1);
    await this.fillAdress2(user.adress2);
    await this.fillCity(user.city);
    await this.fillZipCode(user.zipCode);
    await this.selectCountry(country);
    await this.selectRegion(region);
    await this.fillUserName(user.username);
    await this.fillPassword(user.password);
    await this.fillPasswordConfirm(user.password);
  }
}
