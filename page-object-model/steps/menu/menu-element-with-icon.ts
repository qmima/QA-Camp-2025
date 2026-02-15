import { MenuElementInterface } from './menu-element-interface';

export class MenuElementWithIcon implements MenuElementInterface {
  constructor(
    public name: string,
    public sublist?: MenuElementWithIcon[]
  ) {}
  subMenuXpath: string = '/ul[1]/li';
}
