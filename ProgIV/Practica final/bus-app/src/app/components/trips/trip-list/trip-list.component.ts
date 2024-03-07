import {Component, OnDestroy, OnInit} from '@angular/core';
import {Trip} from "../../../models/Trip";
import {TripService} from "../../../services/trip.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'ba-trip-list',
    templateUrl: './trip-list.component.html',
    styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit, OnDestroy {
    trips: Trip[] = [];
    private subs: Subscription = new Subscription();

    constructor(private tripService: TripService) {
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    ngOnInit(): void {
        this.subs.add(
            this.tripService.getTrips().subscribe(
                {
                    next: value => {
                        this.trips = value;
                        this.loadCities()
                    },
                    error: err => {
                        alert("Hubo un error al cargar los viajes: " + err.message)
                    }
                }
            )
        );

    }

    loadCities(): void {
        for (const trip of this.trips) {
            this.tripService.getCityById(trip.originId).subscribe(originCity => {
                trip.originName = originCity.name;
            });

            this.tripService.getCityById(trip.destinationId).subscribe(destinationCity => {
                trip.destinationName = destinationCity.name;
            });
        }
    }
}
