import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Trip} from "../models/Trip";
import {City} from "../models/City";

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private client: HttpClient) { }

  private baseUrl = "http://localhost:3000/"

  getCities(): Observable<City[]>{
    return this.client.get<City[]>(this.baseUrl + "cities");
  }

  getCityById(id: string): Observable<City> {
    return this.client.get<City>(this.baseUrl + "cities/" + id);
  }

  getTrips(): Observable<Trip[]> {
    return  this.client.get<Trip[]>(this.baseUrl + "trips")
  }

  getTripById(id: string): Observable<Trip> {
    return this.client.get<Trip>(this.baseUrl + "trips/" + id);
  }

  putTrip(trip: Trip): Observable<Trip>{
    return this.client.put<Trip>(this.baseUrl + "trips/" + trip.id, trip);
  }
}
