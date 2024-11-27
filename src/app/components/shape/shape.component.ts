import { Component } from '@angular/core';
import { ShapeService } from './shape.service';
import { Rectangle } from './rectangle';
import { Square } from './square';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrl: './shape.component.css'
})
export class ShapeComponent {
  area: number | null = null;

  constructor(private shapeService: ShapeService) {}

  calculateRectangleArea(): void {
    const rectangle = new Rectangle(5, 10);
    this.area = this.shapeService.calculateArea(rectangle);
  }

  calculateSquareArea(): void {
    const square = new Square(4);
    this.area = this.shapeService.calculateArea(square);
  }
}
