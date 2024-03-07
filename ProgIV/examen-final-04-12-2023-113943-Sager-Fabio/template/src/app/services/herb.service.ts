import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Herb} from "../models/Herb";
import {Country} from "../models/Country";
import {State} from "../models/State";
import {HerbType} from "../models/HerbType";

@Injectable({
  providedIn: 'root'
})
export class HerbService {

  private baseUrl = "https://herb.nhorenstein.com/api/";
  constructor(private client: HttpClient) { }

  getHerbs(): Observable<Herb[]>{
    return this.client.get<Herb[]>(this.baseUrl + "herb");
  }

  getContries(): Observable<Country[]>{
    return this.client.get<Country[]>(this.baseUrl + "country");
  }

  getCountryStates(countryId: number): Observable<State[]>{
    return this.client.get<State[]>(this.baseUrl + "Country/" + countryId +"/states");
  }

  getHerbTypes(): Observable<HerbType[]>{
    return this.client.get<HerbType[]>(this.baseUrl + "Herb/herbTypes");
  }

  postHerb(herb: any): Observable<any> {
    return this.client.post(this.baseUrl + "herb", herb);
  }
}
