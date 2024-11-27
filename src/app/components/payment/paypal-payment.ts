import { PaymentMethod } from './payment-method.interface';

export class PayPalPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using PayPal.`);
  }
}