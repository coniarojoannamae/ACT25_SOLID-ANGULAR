import { Component } from '@angular/core';
import { PaymentService } from './payment.service';
import { CreditCardPayment } from './credit-card-payment';
import { PayPalPayment } from './paypal-payment';
import { BitcoinPayment } from './bitcoin-payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})

export class PaymentComponent {
  constructor(private paymentService: PaymentService) {}

  payWithCreditCard(): void {
    const paymentMethod = new CreditCardPayment();
    this.paymentService.processPayment(100, paymentMethod);
  }

  payWithPayPal(): void {
    const paymentMethod = new PayPalPayment();
    this.paymentService.processPayment(100, paymentMethod);
  }

  payWithBitcoin(): void {
    const paymentMethod = new BitcoinPayment();
    this.paymentService.processPayment(100, paymentMethod)
  }
}


  