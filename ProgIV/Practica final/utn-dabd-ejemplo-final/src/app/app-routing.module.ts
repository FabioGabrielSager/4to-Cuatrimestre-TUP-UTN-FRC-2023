import { NgModule } from '@angular/core';
import { InvoiceHomeComponent } from './components/invoice/invoice-home/invoice-home.component';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./components/home/home.component";
import {ListInvoicesComponent} from "./components/invoice/list-invoices/list-invoices.component";
import {AddInvoiceComponent} from "./components/invoice/add-invoice/add-invoice.component";
import {AddInvoiceDetailComponent} from "./components/invoice/add-invoice-detail/add-invoice-detail.component";

const routes: Routes = [
  { path: 'invoice',
    component: InvoiceHomeComponent,
    children: [
      { path: 'list', component: ListInvoicesComponent},
      { path: 'add', component: AddInvoiceComponent},
      { path: 'addDetail',
        component: AddInvoiceDetailComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}