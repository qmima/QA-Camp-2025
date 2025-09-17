import { Page } from "@playwright/test";

export class HoverProductCard {
  private page: Page;
  private productName: string;

  constructor(page: Page) {
    this.page = page;
   
  }

  async getHoverProductCard() {
    // Najechanie kursorem na element z klasą .block_7
    await this.page.hover(`.block_7`);

    // Pobranie elementu, który reprezentuje kartę produktu
    const hoverProductCard = this.page.locator('.block_7');

     // Pobranie tekstu z elementu wewnątrz karty produktu
    const title = await hoverProductCard.locator('.name a').innerText();

    // Pobranie atrybutu src z elementu img wewnątrz karty produktu
    const imageHref = await hoverProductCard.locator('.image a img').getAttribute('src');
    
    // Pobranie tekstu z elementu wewnątrz karty produktu
    const price = await hoverProductCard.locator('span.cart_total').innerText();

    return {
      title,
      imageHref,
      price,
    };
  }
}