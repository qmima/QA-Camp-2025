import { test } from '../../page-object-model/fixtures/automation-test.fixture';

test('Log in', async ({ homePage }) => {
  await homePage.open();
  await homePage.goToLogInPage();
});
