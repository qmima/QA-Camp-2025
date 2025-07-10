import { expect } from '@playwright/test';
import { test } from '../../page-object-model/fixtures/automation-test.fixture';

test('Open Page', async ({ homePage }) => {
  await homePage.open();
});
