// printer.service.ts
import { Injectable } from '@angular/core';
import { Printer } from './printer.interface';

@Injectable({
  providedIn: 'root',
})
export class PrinterService {
  print(printer: Printer): void {
    printer.print();
  }
}