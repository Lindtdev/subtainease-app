declare module 'carousel-js' {
    export class Carousel {
      constructor(selector: string, options?: any);
      next(): void;
      prev(): void;
      goTo(index: number): void;
    }
  }