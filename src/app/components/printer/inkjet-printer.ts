// inkjet-printer.ts
import { Printer } from './printer.interface';

export class InkjetPrinter implements Printer {
  print(): void {
    console.log('Printing using Inkjet Printer');
  }

  scan(): void {
    console.log('Scanning using Inkjet Printer');
  }

  fax(): void {
    throw new Error('Inkjet Printer does not support faxing');
  }
}