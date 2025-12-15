import { test as base } from '@playwright/test';
import { config } from '../../config/globalConfig';
import { HomePageObject } from '../steps/home-page.object';

type Fixtures = {
  homePage: HomePageObject;
};

const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePageObject(page, config.baseURL);
    await use(homePage);
    await page.close();
  },
});

export { test };
