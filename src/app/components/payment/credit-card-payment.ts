// credit-card-payment.ts
import { PaymentMethod } from './payment-method.interface';

export class CreditCardPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Credit Card.`);
  }
}
