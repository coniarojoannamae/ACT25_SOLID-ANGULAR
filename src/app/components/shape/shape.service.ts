// shape.service.ts
import { Injectable } from '@angular/core';
import { Shape } from './shape.interface';

@Injectable({
  providedIn: 'root',
})
export class ShapeService {
  calculateArea(shape: Shape): number {
    return shape.area();
  }
}