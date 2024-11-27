// square.ts
import { Shape } from './shape.interface';

export class Square implements Shape {
  constructor(private side: number) {}

  area(): number {
    return this.side * this.side;
  }
}