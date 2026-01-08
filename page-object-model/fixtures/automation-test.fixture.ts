import { test as base } from '@playwright/test';
import { MenuRecursion } from '../shared-components/MenuRecursion';
import { HomePageObject } from '../shared-components/HomePageObject';
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
  },
});

export { test };
