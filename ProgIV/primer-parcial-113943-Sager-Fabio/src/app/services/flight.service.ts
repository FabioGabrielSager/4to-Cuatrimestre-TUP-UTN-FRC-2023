import { Injectable } from '@angular/core';
import { Flight } from '../models/flight';
import { FLIGHT_LIST } from '../data/flight-data';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private list: Flight[] = FLIGHT_LIST;

  constructor() { }

  getFlights(): Flight[]{
    return this.list.slice();
  }
}

