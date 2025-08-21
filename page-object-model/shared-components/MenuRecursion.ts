import { expect, Page } from '@playwright/test';
import { MenuElementWithIcon } from './menu/menu-element-with-icon';
import { MenuElementWithImage } from './menu/menu-element-with-image';
import { MainMenuElementWithIcon } from './menu/main-menu-element-with-icon';
export class MenuRecursion {


  constructor(private page:Page) {
 
  }

  async  getMenuDetailsRec(expectedMenuElements: MenuElementWithImage[]|MenuElementWithIcon[]|MainMenuElementWithIcon[], xpath: string)
  {
    const menuCounter = await this.page.locator(xpath).count();
    expect(expectedMenuElements.length).toEqual(menuCounter);
    for (let i = 1; i <= menuCounter; i++) 
      {
        let e = expectedMenuElements[i-1];
        const xpathText = xpath + `[${i}]/a`;
        const text = await this.page.locator(xpathText).textContent();
        expect(e.name.toLowerCase()).toEqual(text?.trim().toLowerCase());
        if (!e.sublist) 
          {
          await expect(this.page.locator(xpath + `[${i}]`)).toBeVisible();
          }
          else
          {
          await this.page.locator(xpath + `[${i}]`).hover();
          let newXpath = xpath + `[${i}]` + e.subMenuXpath;
          await this.getMenuDetailsRec(e.sublist, newXpath);
          }
      }
  }


  }
