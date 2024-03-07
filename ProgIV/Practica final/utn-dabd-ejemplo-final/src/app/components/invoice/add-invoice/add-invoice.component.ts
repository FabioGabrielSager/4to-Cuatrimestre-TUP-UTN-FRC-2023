import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {InvoicesService} from "../../../services/invoices.service";
import {Subscription} from "rxjs";
import {DateValidator} from "../validators/dateValidator";
import {Invoice} from "../../../models/Invoice";
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'ef-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit,OnDestroy {
  private subs: Subscription = new Subscription();
  newInvoice = new Invoice();

  constructor(private router: Router, private invoicesService: InvoicesService) {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm){
    if(form.invalid){
      alert("Formulario invalido");
      form.control.markAllAsTouched();
      return;
    }

    this.newInvoice.id = uuidv4();
    this.newInvoice.details = [];

    this.invoicesService.setNewInvoice = this.newInvoice;
    this.router.navigate(["/invoice/addDetail"]);
  }
}
