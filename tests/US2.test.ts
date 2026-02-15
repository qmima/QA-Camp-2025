import { test } from '../page-object-model/fixtures/howling-test.fixture';

test('US2 test', async ({ homePage }) => {
  await homePage.open();
  await homePage.clickAcceptButton();
  await homePage.fillName('Postać_01');
  await homePage.addCharacter();
  await homePage.validatePopupIncompletePoints();

  await homePage.closePage();
});
