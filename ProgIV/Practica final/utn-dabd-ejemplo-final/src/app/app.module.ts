import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './components/home/home.component';
import {InvoiceHomeComponent} from "./components/invoice/invoice-home/invoice-home.component";
import { AddInvoiceComponent } from './components/invoice/add-invoice/add-invoice.component';
import { ListInvoicesComponent } from './components/invoice/list-invoices/list-invoices.component';
import {HttpClientModule} from "@angular/common/http";
import { AddInvoiceDetailComponent } from './components/invoice/add-invoice-detail/add-invoice-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DateValidatorDirective } from './components/invoice/validators/date-validator.directive';
import {MinInvoicesByClientName} from "./components/invoice/validators/min-invoices-by-client-name";
import { MinInvoicesByClientDirective } from './components/invoice/validators/min-invoices-by-client.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InvoiceHomeComponent,
    AddInvoiceComponent,
    ListInvoicesComponent,
    AddInvoiceDetailComponent,
    DateValidatorDirective,
      MinInvoicesByClientDirective
  ],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
