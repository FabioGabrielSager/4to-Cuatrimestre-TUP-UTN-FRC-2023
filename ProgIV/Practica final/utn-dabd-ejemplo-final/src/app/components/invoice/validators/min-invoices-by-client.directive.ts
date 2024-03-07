import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {MinInvoicesByClientName} from "./min-invoices-by-client-name";
import {Observable} from "rxjs";

@Directive({
  selector: '[efMinInvoicesByClient]',
  providers: [
    {provide: NG_ASYNC_VALIDATORS, useExisting: MinInvoicesByClientDirective, multi: true }
  ]
})
export class MinInvoicesByClientDirective implements AsyncValidator {

  constructor(private validator: MinInvoicesByClientName) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.validator.validate(control);
  }
}
