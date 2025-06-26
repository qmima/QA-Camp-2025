import { expect, Page } from '@playwright/test';
import { MenuElementWithIcon } from './menu/menu-element-with-icon';
import { MenuElementWithImage } from './menu/menu-element-with-image';
export class Menu {


  constructor(private page:Page) {
 
  }

    
  async  getMenuDetails(expectedMenuElements: MenuElementWithImage[]|MenuElementWithIcon[])
  {

    const menuCounter = await this.page.locator('//*[@id="categorymenu"]/nav/ul/li').count();
    console.log(menuCounter);
    console.log(expectedMenuElements.length);
     expect(expectedMenuElements.length).toEqual(menuCounter);
  

    for (let i = 1; i <= menuCounter; i++) 
      {
      const xpath = `//*[@id="categorymenu"]/nav/ul/li[${i}]/a`;
      const text = await this.page.locator(xpath).textContent();
      console.log(text?.trim())
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
      console.log(menuCounter2);
      console.log(e.sublist.length);
      for (let j = 1; j <= menuCounter2; j++)
        {
          const xpath3 = `//*[@id="categorymenu"]/nav/ul/li[${i}]/div/ul[1]/li[${j}]/a`;
          const text2 = await this.page.locator(xpath3).textContent();
          console.log(text2?.trim())
                   
          if(e.sublist != undefined){
            expect(e.sublist[j-1].name.toLowerCase()).toEqual(text2?.trim().toLowerCase());
          }
           
        }  
      }
  }

}
