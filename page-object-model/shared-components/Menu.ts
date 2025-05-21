import { expect, Locator, Page } from '@playwright/test';

export class Menu {
  mainMenu: Locator;
  subMenu: Locator;

  constructor(mainMenu: Locator, subMenu: Locator) {
    this.mainMenu = mainMenu;
    this.subMenu = subMenu;
  }

   async checkIfRightMainMenu() {
    await expect(this.mainMenu).toContainText('  Makeup');
  }

    async checkIfRightSubMenu() {
    await expect(this.subMenu).toContainText('    Lips');
  }


  }



