import { test } from '../../page-object-model/fixtures/automation-test.fixture';
import { UserBuilder, UserDirector } from '../../page-object-model/constants/user';
import { expect } from '@playwright/test';

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
  await logInPage.fillAllUserData(user, 'Taiwan', 'Chia-i');

  //check checkboxes
  await logInPage.checkPolicyCheckbox();
  await logInPage.checkSubscribeNoButton();

  //verify all inputs
  let inputText = await logInPage.getFirstName();
  expect(inputText).toEqual(user.firstName);

  //Sumbit new rejestration
  await logInPage.clickRegisterButton();

  //User is succesfully created
  const confirmationMessage = await logInPage.confirmationMessage();
  expect(confirmationMessage).toContain('Your Account Has Been Created!');
});
