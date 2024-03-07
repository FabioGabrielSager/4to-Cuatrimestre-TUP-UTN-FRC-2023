import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../models/Movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseResourceUrl = "https://nodejs-sls-movies-api.vercel.app/api/movies";
  constructor(private http: HttpClient) { }
  
  getAllMovies(): Observable<{data: Movie[]}>{
    return this.http.get<{data: Movie[]}>(this.baseResourceUrl);
  }

  getMovieByTitle(title: string): Observable<{data: Movie}>{
    return this.http.get<{data: Movie}>(this.baseResourceUrl + "?title=" + title);
  }

  addMove(movie: Movie): Observable<any>{
    return  this.http.post(this.baseResourceUrl, movie);
  }
}
