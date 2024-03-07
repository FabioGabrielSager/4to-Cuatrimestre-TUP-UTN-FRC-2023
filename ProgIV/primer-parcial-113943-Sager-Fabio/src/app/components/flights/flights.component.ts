import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FlightService} from "../../services/flight.service";
import {Flight} from "../../models/flight";

@Component({
  selector: 'bp-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  flights: Flight[] = [];
  @Output() onFlightSelection = new EventEmitter<Flight>();
  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flights = this.flightService.getFlights();
  }

  selectFlight($event: any): void {
    this.onFlightSelection.emit(this.flights[$event.target.value]);
  }
}
