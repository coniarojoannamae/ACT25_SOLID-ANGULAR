// bitcoin-payment.ts
import { PaymentMethod } from './payment-method.interface';

export class BitcoinPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Bitcoin.`);
  }
}