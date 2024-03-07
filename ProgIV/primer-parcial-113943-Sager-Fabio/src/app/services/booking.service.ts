import { Injectable } from '@angular/core';
import {Booking} from "../models/booking";

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  booking: Booking[] = [];
  constructor() { }

  addBook(booking: Booking): void {
    this.booking.push(booking);
  }
}
