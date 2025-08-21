import { expect, Locator, Page } from '@playwright/test';
import { MenuElementWithIcon } from './menu/menu-element-with-icon';
import { MenuElementWithImage } from './menu/menu-element-with-image';
import { MainMenuElementWithIcon } from './menu/main-menu-element-with-icon';

export class HomePageObject {
  page: Page;
  private url: string;

  constructor(page: Page, url: string) {
    this.page = page;
    this.url = url;
  }

  private async checkIfOpen() {
    await this.page.waitForSelector('body');
  }

  async toHaveTitle() {
    await expect(this.page).toHaveTitle('A place to practice your automation skills!');
  }

  async open() {
    await this.page.goto(this.url);
    await this.checkIfOpen();
    await this.toHaveTitle();
  }

async getMenuDetailsRec(expectedMenuElements: MenuElementWithImage[]|MenuElementWithIcon[]|MainMenuElementWithIcon[], xpath: string)
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

  async  getMenuDetails(expectedMenuElements: MenuElementWithImage[]|MenuElementWithIcon[])
  {

    const menuCounter = await this.page.locator('//*[@id="categorymenu"]/nav/ul/li').count();
    expect(expectedMenuElements.length).toEqual(menuCounter);
  
    for (let i = 1; i <= menuCounter; i++) 
      {
      const xpath = `//*[@id="categorymenu"]/nav/ul/li[${i}]/a`;
      const text = await this.page.locator(xpath).textContent();
      let e = expectedMenuElements[i-1];
      expect(e.name.toLowerCase()).toEqual(text?.trim().toLowerCase());
      const xpath2 = `//*[@id="categorymenu"]/nav/ul/li[${i}]/div/ul[1]/li`;
      await this.page.locator(xpath).hover();
      if (!e.sublist) 
        {
        await expect(this.page.locator(xpath2)).toBeHidden();
        continue
        }

      const menuCounter2 = await this.page.locator(xpath2).count();
      expect(e.sublist.length).toEqual(menuCounter2);
      for (let j = 1; j <= menuCounter2; j++)
        {
          const xpath3 = `//*[@id="categorymenu"]/nav/ul/li[${i}]/div/ul[1]/li[${j}]/a`;
          const text2 = await this.page.locator(xpath3).textContent();
                   
          if(e.sublist != undefined){
            expect(e.sublist[j-1].name.toLowerCase()).toEqual(text2?.trim().toLowerCase());
          }
           
        }  
      }
  }


}
