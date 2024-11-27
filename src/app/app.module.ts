import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import { TaskComponent } from './components/task/task.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ShapeComponent } from './components/shape/shape.component';
import { PrinterComponent } from './components/printer/printer.component';

const routes: Routes = [
    { path: 'task', component: TaskComponent},
    { path: 'payment', component: PaymentComponent},
    { path: 'shape', component: ShapeComponent},
    { path: 'printer', component: PrinterComponent},


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,

  ],

  declarations: [
    AppComponent,
    TaskComponent,
    PaymentComponent,
    ShapeComponent,
    PrinterComponent,

],


bootstrap: [
    AppComponent
    ]
  
  })
  export class AppModule { }