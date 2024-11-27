// sms-notification.service.ts
import { Injectable } from '@angular/core';
import { Notification } from './notification.interface';

@Injectable({
  providedIn: 'root',
})
export class SMSNotificationService implements Notification {
  send(message: string): void {
    console.log(`SMS sent: ${message}`);
  }
}