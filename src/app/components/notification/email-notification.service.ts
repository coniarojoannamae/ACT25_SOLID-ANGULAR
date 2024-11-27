// email-notification.service.ts
import { Injectable } from '@angular/core';
import { Notification } from './notification.interface';

@Injectable({
  providedIn: 'root',
})
export class EmailNotificationService implements Notification {
  send(message: string): void {
    console.log(`Email sent: ${message}`);
  }
}