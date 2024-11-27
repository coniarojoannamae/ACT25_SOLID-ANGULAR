// rectangle.ts
import { Shape } from './shape.interface';

export class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }
}
