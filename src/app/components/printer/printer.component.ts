import { Component } from '@angular/core';
import { PrinterService } from './printer.service';
import { InkjetPrinter } from './inkjet-printer';
import { LaserPrinter } from './laser-printer';


@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrl: './printer.component.css'
})
export class PrinterComponent {
  constructor(private printerService: PrinterService) {}

  printUsingInkjet(): void {
    const inkjetPrinter = new InkjetPrinter();
    this.printerService.print(inkjetPrinter);
  }

  printUsingLaser(): void {
    const laserPrinter = new LaserPrinter();
    this.printerService.print(laserPrinter);
  }
}