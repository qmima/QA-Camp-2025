import { test as base } from '@playwright/test';
import { Menu } from '../shared-components/Menu';
import { config } from '../../config/globalConfig';

type Fixtures = {
  menu: Menu;
};

const test = base.extend<Fixtures>({
  menu: async ({ page }, use) => {
    const mainMenu = page.locator('//*[@id="categorymenu"]/nav/ul/li[3]/a');
    const subMenu = page.locator('//*[@id="categorymenu"]/nav/ul/li[3]/div/ul[1]/li[4]/a');
    const menu = new Menu(mainMenu, subMenu);
    await use(menu);
  },
});

export { test };