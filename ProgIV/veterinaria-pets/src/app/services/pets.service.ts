import { Injectable } from '@angular/core';
import {Mascota} from "../Classes/Mascota";

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  pets: Mascota[] = [new Mascota()];
  constructor() { }

  public getPets(): Mascota[] {
    return this.pets.slice();
  }

  public addPet(pet: Mascota): void {
    this.pets.push(pet);
  }
}
