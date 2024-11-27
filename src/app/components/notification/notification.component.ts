// notification.component.ts
import { Component } from '@angular/core';
import { NotificationService } from './notification.service';
import { EmailNotificationService } from './email-notification.service';
import { SMSNotificationService } from './sms-notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  private notificationService: NotificationService;

  constructor() {
    // You can switch between EmailNotification and SMSNotification here
    this.notificationService = new NotificationService(new EmailNotificationService());
    // Or use SMS
    // this.notificationService = new NotificationService(new SMSNotificationService());
  }

  sendEmail(): void {
    this.notificationService.notify('Hello via Email!');
  }

  sendSMS(): void {
    this.notificationService = new NotificationService(new SMSNotificationService());
    this.notificationService.notify('Hello via SMS!');
  }
}