import { Injectable } from '@angular/core';
import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";
import {catchError, map, Observable, of} from "rxjs";
import {FilmsService} from "../services/films.service";

@Injectable({
  providedIn: 'root'
})
export class UniqueNameAsyncValidator implements AsyncValidator {

  constructor(private filmService: FilmsService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    let result: Observable<ValidationErrors | null> = this.filmService.getByName(control.value).pipe(
      map(isTaken => isTaken.length > 0 ? {isNotAUniqueName: true} : null),
      catchError(err => of(null))
    );

    return result;
  }
}
