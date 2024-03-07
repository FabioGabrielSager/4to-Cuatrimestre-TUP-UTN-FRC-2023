import { Injectable } from '@angular/core';
import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";
import {catchError, map, Observable, of} from "rxjs";
import {MovieService} from "../../services/movie.service";

@Injectable({
  providedIn: 'root'
})
export class UniqueTitleValidator implements AsyncValidator{

  constructor(private movieService: MovieService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.movieService.getMovieByTitle(control.value).pipe(
        map(isTaken => isTaken.data.title.length > 0 ? {istaked: true} : null),
        catchError(err => of(null))
    );
  }
}
