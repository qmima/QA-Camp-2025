import { test as base } from '@playwright/test';
import { HomePageObject } from '../shared-components/HomePageObject';
import { config } from '../../config/globalConfig';

type Fixtures = {
  homePage: HomePageObject;
};

const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePageObject(page, config.baseURL);
    await use(homePage);
  },
});

export { test };
