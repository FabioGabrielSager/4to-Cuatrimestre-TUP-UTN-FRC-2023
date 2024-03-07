import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Trip} from "../../../models/Trip";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TripService} from "../../../services/trip.service";
import {Subscription} from "rxjs";
import {Stop} from "../../../models/Stop";
import {Router} from "@angular/router";
import {isANumberValidator} from "../validators/IsANumberValidator";

@Component({
    selector: 'ba-trip-stop-edit',
    templateUrl: './trip-stop-edit.component.html',
    styleUrls: ['./trip-stop-edit.component.css']
})
export class TripStopEditComponent implements OnInit, OnDestroy {
    @Input() editedTrip: Trip | undefined;
    @Input() originalTrip: Trip | undefined;
    @Output() onCancel = new EventEmitter();
    private subs: Subscription = new Subscription();
    form: FormGroup = this.fb.group({});

    constructor(private fb: FormBuilder, private tripService: TripService, private router: Router) {
        this.form = this.fb.group({
            stops: this.fb.array([this.createStopForm()])
        })
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    ngOnInit(): void {
    }

    createStopForm() {
        return this.fb.group({
            location: ["", [Validators.required, Validators.min(20)]],
            time: ["", [Validators.required]],
            stopTime: ["", [Validators.required, Validators.min(1), isANumberValidator]]
        })
    }

    get stopFormArray() {
        return this.form.controls["stops"] as FormArray;
    }

    addStopForm() {
        this.stopFormArray.push(this.createStopForm());
    }

    removeStopForm(index: number) {
        this.stopFormArray.removeAt(index);
    }

    saveTrip() {
        if (this.editedTrip != undefined) {
            for (let i = 0; i < this.stopFormArray.length; i++) {
                let stop = new Stop();
                stop.stopTime = this.stopFormArray.controls[i].get('stopTime')?.value;
                stop.location = this.stopFormArray.controls[i].get('location')?.value;
                stop.time = this.stopFormArray.controls[i].get('time')?.value;
                if (this.editedTrip?.stops.indexOf(stop) == undefined) {
                    this.editedTrip.stops.push(stop);
                } else {
                    alert("La parada " + i + 1 + "ya existe");
                }
            }

            if (this.editedTrip == this.originalTrip) {
                alert("Debe hacer modificaciones al viaje para poder guardar");
                return;
            }

            this.subs.add(
                this.tripService.putTrip(this.editedTrip).subscribe(
                    {
                        next: value => {
                            alert("El viaje se modifico con exito");
                            this.router.navigate(["/trips/list"])
                        },
                        error: err => {
                            alert("Hubo un error al guardar el formulario")
                        }
                    }
                )
            )
        }
    }
}
