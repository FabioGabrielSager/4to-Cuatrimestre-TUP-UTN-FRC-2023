import { Component, OnInit } from '@angular/core';
import { Auto } from './auto';
import { NgForm } from '@angular/forms';
import { AutoService } from '../services/auto.service';

@Component({
  selector: 'app-nuevo-auto',
  templateUrl: './nuevo-auto.component.html',
  styleUrls: ['./nuevo-auto.component.css']
})
export class NuevoAutoComponent implements OnInit {
  nombre: string = '';
  modelo: string = '';
  
  auto: Auto = new Auto();

  constructor(private autoService: AutoService){

  }

  ngOnInit(): void {
  }

  send(formulario: NgForm): void {
    if(formulario.invalid){
      alert('Formulario invalido');
      return;
    }

    this.autoService.guardar(this.auto);
  }
}
