import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Continent, Country} from "../models/Pais";

@Injectable({
  providedIn: 'root'
})
export class ContriesService {
  baseContinentsUrl = "http://localhost:3000/continents"
  baseCountriesUrl = "http://localhost:3000/countries"

  constructor(private http: HttpClient) { }

  getAllContinents(): Observable<Continent[]> {
    return this.http.get<Continent[]>(this.baseContinentsUrl);
  }

  getContriesByContinent(continentId: number): Observable<Country[]> {
    return this.http.get<Country[]>(this.baseCountriesUrl + "?continent_id=" + continentId);
  }
}
