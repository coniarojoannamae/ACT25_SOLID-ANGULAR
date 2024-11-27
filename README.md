# ACT25SOLID
What are the SOLID Principles?

The SOLID principles consist of five design principles intended to make software designs more understandable, flexible, and maintainable. Let's break down each principle:

#Single Responsibility Principle (SRP):

Definition: A class should have only one reason to change, meaning it should have only one job or responsibility.

Application in Angular: In Angular, components, services, and modules should be designed to handle a single task. For example, a component should handle UI-related logic, while a service should handle business logic or data fetching.

Code Example:

// task.model.ts
export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// task.service.ts
import { Injectable } from '@angular/core';
import { Task } from './task.model';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  addTask(title: string): void {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title,
      completed: false,
    };
    this.tasks.push(newTask);
  }
  getTasks(): Task[] {
    return this.tasks;
  }
  completeTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = true;
    }
  }
}
// task.component.ts
import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent {
  taskTitle: string = '';
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }
  addTask(): void {
    if (this.taskTitle) {
      this.taskService.addTask(this.taskTitle);
      this.taskTitle = '';
      this.tasks = this.taskService.getTasks(); // Refresh the task list
    }
  }
  completeTask(id: number): void {
    this.taskService.completeTask(id);
    this.tasks = this.taskService.getTasks(); // Refresh the task list
  }
}

#Open/Closed Principle (OCP):

Definition: Software entities should be open for extension but closed for modification.

Application in Angular: In Angular, you can achieve OCP by using services, interfaces, and inheritance. This allows you to add new functionality without altering existing code.

Code Example:

// payment-method.interface.ts
export interface PaymentMethod {
  pay(amount: number): void;
}

//Payment Method Classes
// --> credit-card-payment.ts
import { PaymentMethod } from './payment-method.interface';

export class CreditCardPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Credit Card.`);
  }
}

// --> paypal-payment.ts
import { PaymentMethod } from './payment-method.interface';

export class PayPalPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using PayPal.`);
  }
}

// --> bitcoin-payment.ts
import { PaymentMethod } from './payment-method.interface';

export class BitcoinPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Bitcoin.`);
  }
}

// payment.component.ts (modified)
import { Component } from '@angular/core';
import { PaymentService } from './payment.service';
import { CreditCardPayment } from './credit-card-payment';
import { PayPalPayment } from './paypal-payment';
import { BitcoinPayment } from './bitcoin-payment';

@Component({
  selector: 'app-payment',
  template: `
    <h2>Payment</h2>
    <button (click)="payWithCreditCard()">Pay with Credit Card</button>
    <button (click)="payWithPayPal()">Pay with PayPal</button>
    <button (click)="payWithBitcoin()">Pay with Bitcoin</button>
  `,
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
    this.paymentService.processPayment(100, paymentMethod);
  }
}

#Liskov Substitution Principle (LSP):

Definition: Subtypes must be substitutable for their base types without altering the correctness of the program.

Application in Angular: When creating derived classes, ensure they can stand in for their base classes without causing errors. This is particularly relevant for services and components that extend functionality.

Code Example:

// shape.interface.ts
export interface Shape {
  area(): number;
}

//Shape Classes
// -->rectangle.ts
import { Shape } from './shape.interface';
export class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  area(): number {
    return this.width * this.height;
  }
}

// -->square.ts
import { Shape } from './shape.interface';
export class Square implements Shape {
  constructor(private side: number) {}
  area(): number {
    return this.side * this.side;
  }
}

// shape.component.ts
import { Component } from '@angular/core';
import { ShapeService } from './shape.service';
import { Rectangle } from './rectangle';
import { Square } from './square';
@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrl: './shape.component.css'
})
export class ShapeComponent {
  area: number | null = null;

  constructor(private shapeService: ShapeService) {}
  calculateRectangleArea(): void {
    const rectangle = new Rectangle(5, 10);
    this.area = this.shapeService.calculateArea(rectangle);
  }
  calculateSquareArea(): void {
    const square = new Square(4);
    this.area = this.shapeService.calculateArea(square);
  }
}

#Interface Segregation Principle (ISP):

Definition: No client should be forced to depend on methods it does not use.

Application in Angular: Instead of creating large interfaces, break them down into smaller, more specific ones. This allows components and services to implement only the interfaces they need.

Code Example:

// printer.interface.ts
export interface Printer {
  print(): void;
  scan(): void;
  fax(): void;
}

//Printer Classes
// -->inkjet-printer.ts
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
// laser-printer.ts
import { Printer } from './printer.interface';
export class LaserPrinter implements Printer {
  print(): void {
    console.log('Printing using Laser Printer');
  }
  scan(): void {
    throw new Error('Laser Printer does not support scanning');
  }
  fax(): void {
    console.log('Faxing using Laser Printer');
  }
}

// printer.component.ts
import { Component } from '@angular/core';
import { PrinterService } from './printer.service';
import { InkjetPrinter } from './inkjet-printer';
import { LaserPrinter } from './laser-printer';
@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrl: './printer.component.css'
})
export class PrinterComponent {
  constructor(private printerService: PrinterService) {}
  printUsingInkjet(): void {
    const inkjetPrinter = new InkjetPrinter();
    this.printerService.print(inkjetPrinter);
  }
  printUsingLaser(): void {
    const laserPrinter = new LaserPrinter();
    this.printerService.print(laserPrinter);
  }
}

#Dependency Inversion Principle (DIP):

Definition: High-level modules should not depend on low-level modules. Both should depend on abstractions. This principle encourages the use of interfaces or abstract classes to allow for flexible and decoupled designs.

Application in Angular: In Angular, the Dependency Injection (DI) system is a powerful way to implement the Dependency Inversion Principle. By injecting dependencies (like services) into components rather than hardcoding them, you can easily swap implementations without modifying the dependent code.

Code Example:

// notification.interface.ts
export interface Notification {
  send(message: string): void;
}

//Concrete Implementations
// -->email-notification.service.ts
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

// -->sms-notification.service.ts
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

Firebase: https://solid-principles-svfc-4a.web.app
