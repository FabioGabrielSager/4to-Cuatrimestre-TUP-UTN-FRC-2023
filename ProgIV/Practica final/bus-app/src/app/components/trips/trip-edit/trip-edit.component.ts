import {Component, OnDestroy, OnInit} from '@angular/core';
import {Trip} from "../../../models/Trip";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {TripService} from "../../../services/trip.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {City} from "../../../models/City";
import {isANumberValidator} from "../validators/IsANumberValidator";
import {formatDate} from "@angular/common";

@Component({
    selector: 'ba-trip-edit',
    templateUrl: './trip-edit.component.html',
    styleUrls: ['./trip-edit.component.css']
})
export class TripEditComponent implements OnInit, OnDestroy {
    originalTrip: Trip = new Trip();
    editedTrip: Trip = new Trip();
    cities: City[] = [];
    private subs: Subscription = new Subscription();
    showEditStopForm: boolean = false;
    form: FormGroup = this.fb.group({});

    constructor(private route: ActivatedRoute, private tripService: TripService, private fb: FormBuilder) {
        this.form = this.fb.group({
            origin: ["", [Validators.required]],
            destination: ["", [Validators.required]],
            departureDate: ["", [Validators.required]],
            departureTime: ["", [Validators.required]],
            price: ["", [Validators.required, Validators.min(1), isANumberValidator]],
        });
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    ngOnInit(): void {
        this.subs.add(
            this.route.params.subscribe(
                params => {
                    this.subs.add(
                        this.tripService.getTripById(params['tripId']).subscribe(
                            {
                                next: value => {
                                    this.originalTrip = value;
                                    this.form.controls['origin'].setValue(value.originId);
                                    this.form.controls['destination'].setValue(value.destinationId);
                                    if(value.departureDate != undefined)
                                    this.form.controls['departureDate'].setValue(formatDate(value.departureDate, 'yyyy-MM-dd', 'en'));
                                    this.form.controls['departureTime'].setValue(value.departureTime);
                                    this.form.controls['price'].setValue(value.price);
                                },
                                error: err => {
                                    alert("Hubo un error al intentar recuperar el viaje a modificar")
                                }
                            }
                        )
                    )
                }
            )
        );

        this.subs.add(
            this.tripService.getCities().subscribe(
                {
                    next: value => { this.cities = value },
                    error: err => {
                        alert("Hubo un error al intentar recuperar las ciudades")
                    }
                }
            )
        );
    }

    onClickContinue(){
        if(this.form.invalid){
            alert("Formulario invalido");
            this.form.markAllAsTouched();
        }

        if(this.form.controls['origin'].value == this.form.controls['destination'].value){
            alert("El origen y el destino no pueden ser iguales");
            return;
        }

        this.showEditStopForm = true;

        this.editedTrip.id = this.originalTrip.id;
        this.editedTrip.stops = this.originalTrip.stops;
        this.editedTrip.departureDate =  this.form.controls["departureDate"].value;
        this.editedTrip.departureTime = this.form.controls["departureTime"].value;
        this.editedTrip.destinationId = this.form.controls["destination"].value;
        this.editedTrip.originId = this.form.controls["origin"].value;
        this.editedTrip.price = this.form.controls["price"].value;
    }
}
