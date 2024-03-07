import { Injectable } from '@angular/core';
import {Film} from "../models/Film";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  baseUrl = "http://localhost:3000/films"
  constructor(private http: HttpClient) { }

  addFilm(film: Film): Observable<any>{
    return this.http.post(this.baseUrl, film);
  }

  getByName(name: string): Observable<Film[]>{
    return this.http.get<Film[]>(this.baseUrl + "?name=" + name);
  }

  getAll(): Observable<Film[]>{
    return this.http.get<Film[]>(this.baseUrl);
  }
}
