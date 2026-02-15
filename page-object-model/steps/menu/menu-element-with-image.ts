import { MenuElementInterface } from './menu-element-interface';

export class MenuElementWithImage implements MenuElementInterface {
  constructor(
    public name: string,
    public sublist?: MenuElementWithImage[]
  ) {}
  subMenuXpath: string = '/div/ul[1]/li';
}
