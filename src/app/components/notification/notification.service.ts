// notification.service.ts
import { Injectable, Inject } from '@angular/core';
import { Notification } from './notification.interface';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(@Inject('Notification') private notification: Notification) {}

  notify(message: string): void {
    this.notification.send(message);
  }
}