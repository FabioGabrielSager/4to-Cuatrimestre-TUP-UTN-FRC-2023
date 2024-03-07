import { Injectable } from '@angular/core';
import {AbstractControl, AsyncValidator, AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import {InvoicesService} from "../../../services/invoices.service";
import {catchError, map, Observable, of} from "rxjs";
import {Invoice} from "../../../models/Invoice";

@Injectable({
  providedIn: 'root'
})
export class MinInvoicesByClientName implements AsyncValidator{

  constructor(private invoicesService: InvoicesService) {
  }

  minInvoicesForAClientValidator(minimum: number): AsyncValidatorFn {
      return (control: AbstractControl): Observable<ValidationErrors | null> => {
          let result: Observable<ValidationErrors | null> = this.invoicesService.getAllInvoicesByClientName(control.value).pipe(
              map((invs) => (invs.length + 1 > minimum ? { exceedsTheMinimum: true } : null)),
              catchError(err => of(null))
          );
            return result;
      };
  }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.minInvoicesForAClientValidator(2)(control);
  }
}
