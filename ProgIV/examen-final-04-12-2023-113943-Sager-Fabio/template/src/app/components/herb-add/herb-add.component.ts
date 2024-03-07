import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HerbService} from "../../services/herb.service";
import {Country} from "../../models/Country";
import {State} from "../../models/State";
import {Herb} from "../../models/Herb";
import {HerbType} from "../../models/HerbType";
import {Router} from "@angular/router";

@Component({
  selector: 'app-herb-add',
  templateUrl: './herb-add.component.html',
  styleUrls: ['./herb-add.component.css']
})
export class HerbAddComponent implements OnInit,OnDestroy {
  private subs: Subscription = new Subscription();
  countries: Country[] = [];
  states: State[] = [];
  herbsType: HerbType[] = [];
  newHerbId: number = 0;
  form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private herbService: HerbService, private router: Router) {
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(200)]],
      code: ["", [Validators.required, Validators.maxLength(10)]],
      description: ["", [Validators.max(1000)]],
      country: ["", [Validators.required]],
      state: [{value: "", disable: true}, [Validators.required]],
      details: this.fb.array([this.createDetailForm()])
    });

    this.form.controls['state'].disable();
  }

  get detailsArrayForm(){
    return this.form.controls["details"] as FormArray;
  }

  createDetailForm(){
    return this.fb.group(
      {
        herbType: ["", [Validators.required]],
        quantity: ["", [Validators.required, Validators.min(1)]],
        price: ["", [Validators.required]],
        weight: [""],
      }
    );
  }

  addDetailForm(){
    this.detailsArrayForm.push(this.createDetailForm());
  }

  removeDetailForm(i: number){
    this.detailsArrayForm.removeAt(i);
  }

  ngOnInit(): void {
    this.subs.add(
      this.herbService.getHerbs().subscribe(
        {
          next: value => { this.newHerbId = value.length + 1 },
          error: err => { alert("Hubo un error al asignar id") }
        }
      )
    );

    this.subs.add(
      this.herbService.getContries().subscribe({
        next: value => {this.countries = value},
        error: err => { alert("Hubo un error al recuperar los paises") }
      })
    );

    this.subs.add(
      this.form.controls['country'].valueChanges.subscribe(
        value => {
          if(value != undefined) {
            this.subs.add(
              this.herbService.getCountryStates(value).subscribe({
                next: value => { this.states = value; this.form.controls['state'].enable(); },
                error: err => { alert("Hubo un error al recuperar los estados") }
              })
            )
          }
        }
      )
    );

    this.subs.add(
      this.herbService.getHerbTypes().subscribe(
        {
          next: value => {
            this.herbsType = value;
          },
          error: err => { alert("Hubo un error al recuperar tipos de yerbas"); }
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onSubmit(){
    if(this.form.invalid){
      alert("El formulario es invalido");
      this.form.markAllAsTouched();
      return;
    }

    if(this.detailsArrayForm.length == 0){
      alert("Debe agregar aún que sea un detalle");
      return;
    }

    let herbDetails: any[] = [];

    for(let i=0; i < this.detailsArrayForm.length; i++){
      let herbDetail =        {
        "herbTypeId": this.detailsArrayForm.controls[i].get('herbType')?.value,
        "price": this.detailsArrayForm.controls[i].get('price')?.value,
        "quantity": this.detailsArrayForm.controls[i].get('quantity')?.value,
        "weight": this.detailsArrayForm.controls[i].get('weight')?.value
      }

      herbDetails.push(herbDetail);
    }

    let newHerb = {
      "name": this.form.controls['name'].value,
      "description": this.form.controls['description'].value,
      "code": this.form.controls['code'].value,
      "countryId": this.form.controls['country'].value,
      "stateId": this.form.controls['state'].value,
      "herbDetails": herbDetails
    }



    console.log(newHerb);

    this.subs.add(
      this.herbService.postHerb(newHerb).subscribe(
        {
          next: value => {
            alert("La yerba fue guardada con éxito");
            this.router.navigate(["/herbs/list"]);
            },
          error: err => { alert("Hubo un error al guardar"); }
        }
      )
    );
  }
}
