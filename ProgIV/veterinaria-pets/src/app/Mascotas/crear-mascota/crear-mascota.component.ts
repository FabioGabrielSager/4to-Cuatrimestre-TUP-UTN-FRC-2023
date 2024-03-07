import {Component, OnInit} from '@angular/core';
import {Mascota} from "../../Classes/Mascota";
import {NgForm} from "@angular/forms";
import {PetsService} from "../../services/pets.service";

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent{
  mascota: Mascota = new Mascota();

  constructor(private petService: PetsService) {
  }
  sendPet(form: NgForm): void {
    if(form.invalid){
      alert("El formulario es invalido");
      for (const controlName in form.controls){
          const control = form.controls[controlName];
          if(control.invalid){
            control.markAsTouched();
          }
      }
      return;
    }
    this.petService.addPet(this.mascota);
  }
}
