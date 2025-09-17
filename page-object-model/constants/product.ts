export class Product {
  private imageHref: string;
  private price: string;
  private title: string;

  constructor(imageHref: string, price: string, title: string) {
    this.imageHref = imageHref;
    this.price = price;
    this.title = title;
  }

  getImageHref(): string {
    return this.imageHref;
  }

  setImageHref(imageHref: string): void {
    this.imageHref = imageHref;
  }

  getPrice(): string {
    return this.price;
  }

  setPrice(price: string): void {
    this.price = price;
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(title: string): void {
    this.title = title;
  }
}