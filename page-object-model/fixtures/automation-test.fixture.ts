import { test as base } from '@playwright/test';
import { MenuRecursion } from '../steps/MenuRecursion';
import { config } from '../../config/globalConfig';
import { HomePageObject } from '../steps/home-page.object';

type Fixtures = {
  menu: MenuRecursion,
  homePage: HomePageObject
};

const test = base.extend<Fixtures>({
  menu: async ({ page}, use) => {
    const menu = new MenuRecursion(page);
    await use(menu);
  },
  homePage: async ({ page}, use) => {
    const homePage = new HomePageObject(page, config.baseURL);
    await use(homePage);
    await page.close();
  },
});

export { test };
