// payment.service.ts
import { Injectable } from '@angular/core';
import { PaymentMethod } from './payment-method.interface';


@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  [x: string]: any;
  processPayment(amount: number, paymentMethod: PaymentMethod): void {
    paymentMethod.pay(amount);
  }
}