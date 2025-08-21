import { test } from '../../page-object-model/fixtures/HomePageFixture';

test('Open Page', async ({ homePage }) => {
  await homePage.open();
});
