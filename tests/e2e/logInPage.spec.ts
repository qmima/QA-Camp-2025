import { test } from '../../page-object-model/fixtures/automation-test.fixture';
import { expect, Page } from '@playwright/test';

test('Log in', async ({ homePage }) => {
  await homePage.open();

  const logInPage = await homePage.goToLogInPage();
  await logInPage.clickRegisterButton();
  await logInPage.fillInputID('AccountFrm_firstname', 'Alojzy');
});
