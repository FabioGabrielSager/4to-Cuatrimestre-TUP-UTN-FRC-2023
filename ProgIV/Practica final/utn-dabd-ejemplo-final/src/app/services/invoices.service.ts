import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Invoice} from "../models/Invoice";
import {Observable} from "rxjs";
import {Detail} from "../models/Detail";

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  private baseRosourceUrl: string = "http://localhost:3000/invoices";
  private newInvoice = new Invoice();
  constructor(private client: HttpClient) { }

  getAll(): Observable<Invoice[]> {
    return this.client.get<Invoice[]>(this.baseRosourceUrl);
  }

  getById(id: string): Observable<Invoice> {
    return this.client.get<Invoice>(this.baseRosourceUrl + "/" + id);
  }

  getAllInvoicesByClientName(name: string): Observable<Invoice[]> {
    return this.client.get<Invoice[]>(this.baseRosourceUrl + "?clientName=" + name);
  }

  putDetails(invoice: Invoice): Observable<Invoice> {
    return this.client.put<Invoice>(this.baseRosourceUrl + "/" + invoice.id, invoice);
  }

  postInvoice(invoice: Invoice): Observable<Invoice> {
    return this.client.post<Invoice>(this.baseRosourceUrl, invoice);
  }

  get getNewInvoice() {
    return this.newInvoice;
  }

  set setNewInvoice(invoice: Invoice) {
    this.newInvoice = invoice;
  }
}
