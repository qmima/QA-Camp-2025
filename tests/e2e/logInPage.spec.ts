import { test } from '../../page-object-model/fixtures/automation-test.fixture';
import { UserBuilder, UserDirector } from '../../page-object-model/constants/user';

const builder = new UserBuilder();
const director = new UserDirector(builder);
const user = director.constructUser();

test('1. Positive user registration', async ({ homePage }) => {
  await homePage.open();

  const logInPage = await homePage.goToLogInPage();
  await logInPage.clickRegisterButton();

  //check page title
  await logInPage.toHaveTitle('Create Account');

  //fill User data
  await logInPage.fillFirstName(user.firstName);
  await logInPage.fillLastName(user.lastName);
  await logInPage.fillEmail(user.email);
  await logInPage.fillTelephone(user.telephone);
  await logInPage.fillFax(user.fax);
  await logInPage.fillCompany(user.company);
  await logInPage.fillAdress1(user.adress1);
  await logInPage.fillAdress2(user.adress2);
  await logInPage.fillCity(user.city);
  await logInPage.selectRegion('West Yorkshire');
  await logInPage.fillZipCode(user.zipCode);
  await logInPage.selectCountry('United Kingdom');
  await logInPage.fillUserName(user.username);
  await logInPage.fillPassword(user.password);
  await logInPage.fillPasswordConfirm(user.password);
});
