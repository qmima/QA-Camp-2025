import { MenuElementInterface } from './menu-element-interface';
import { MenuElementWithIcon } from './menu-element-with-icon';

export class MainMenuElementWithIcon implements MenuElementInterface {
  constructor(
    public name: string,
    public sublist?: MenuElementWithIcon[]
  ) {}
  subMenuXpath: string = '/div/ul[1]/li';
}
