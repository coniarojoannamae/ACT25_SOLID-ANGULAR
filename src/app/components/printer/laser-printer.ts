// laser-printer.ts
import { Printer } from './printer.interface';

export class LaserPrinter implements Printer {
  print(): void {
    console.log('Printing using Laser Printer');
  }

  scan(): void {
    throw new Error('Laser Printer does not support scanning');
  }

  fax(): void {
    console.log('Faxing using Laser Printer');
  }
}