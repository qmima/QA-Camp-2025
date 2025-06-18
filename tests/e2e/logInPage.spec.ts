import { test } from '../../page-object-model/fixtures/automation-test.fixture';
import { expect } from '@playwright/test';

test('1. Positive user registration', async ({ homePage }) => {
  await homePage.open();

  const logInPage = await homePage.goToLogInPage();
  await logInPage.clickRegisterButton();

  //check page title
  await logInPage.toHaveTitle('Create Account');

  //fill User data
  await logInPage.fillFirstName('Alojzy');
  await logInPage.fillLastName('Kowalski');
  await logInPage.fillEmail('alojzy.kowalski@gmail.com');
  await logInPage.fillAdress('Wrocławska 1');
  await logInPage.fillCity('Poznań');
});
