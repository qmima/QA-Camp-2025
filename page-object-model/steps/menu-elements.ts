import { MenuElementWithImage } from './menu/menu-element-with-image';
import { MenuElementWithIcon } from './menu/menu-element-with-icon';
import { MainMenuElementWithIcon } from './menu/main-menu-element-with-icon';

export const listMenu: MenuElementWithImage[] | MenuElementWithIcon[] | MainMenuElementWithIcon[] =
  [
    new MainMenuElementWithIcon('Home', [
      new MenuElementWithIcon('Specials'),
      new MenuElementWithIcon('Account', [
        new MenuElementWithIcon('Login'),
        new MenuElementWithIcon('Check Your Order'),
      ]),
      new MenuElementWithIcon('Cart'),
      new MenuElementWithIcon('Checkout'),
    ]),
    new MenuElementWithImage('Apparel & Accessories', [
      new MenuElementWithImage('Shoes'),
      new MenuElementWithImage('T-shirts'),
    ]),
    new MenuElementWithImage('makeup', [
      new MenuElementWithImage('cheeks'),
      new MenuElementWithImage('eyes'),
      new MenuElementWithImage('face'),
      new MenuElementWithImage('lips'),
      new MenuElementWithImage('nails'),
      new MenuElementWithImage('Value sets'),
    ]),
    new MenuElementWithImage('skincare', [
      new MenuElementWithImage('eyes'),
      new MenuElementWithImage('face'),
      new MenuElementWithImage('Gift ideas & sets'),
      new MenuElementWithImage('Hands & Nails'),
      new MenuElementWithImage('Sun'),
    ]),
    new MenuElementWithImage('Fragrance', [
      new MenuElementWithImage('Men'),
      new MenuElementWithImage('Women'),
    ]),
    new MenuElementWithImage('Men', [
      new MenuElementWithImage('Body & Shower'),
      new MenuElementWithImage('Fragrance Sets'),
      new MenuElementWithImage('Pre-shave & Shaving'),
      new MenuElementWithImage('Skincare'),
    ]),
    new MenuElementWithImage('Hair Care', [
      new MenuElementWithImage('Conditioner'),
      new MenuElementWithImage('Shampoo'),
    ]),
    new MenuElementWithImage('Books', [
      new MenuElementWithImage('Audio CD'),
      new MenuElementWithImage('Paperback'),
    ]),
  ];
