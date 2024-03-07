import { Injectable } from '@angular/core';
import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";
import {catchError, map, Observable, of, tap} from "rxjs";
import {ProductsService} from "../../services/products.service";

@Injectable({
  providedIn: 'root'
})
export class UniqueProductNameValidatorService implements AsyncValidator{

  constructor(private productsService: ProductsService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    let result = this.productsService.getOneByName(control.value).pipe(
      map((isTaken) => (isTaken.length > 0 ? {uniqueName: true} : null)),
      catchError((err: any) => {
          console.error('Error during name check:', err);
          return of(null)
      })
    );
    return result;
  }


}
