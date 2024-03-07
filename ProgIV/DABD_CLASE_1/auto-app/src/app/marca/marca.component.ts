import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})

export class MarcaComponent implements OnInit, AfterViewInit {
  
  marca: string = '';

  // Con esta función puedo indicar lógica que se va a ejecutar cuando el componente se .
  ngAfterViewInit(): void {
    this.marca = 'Jeep'
  }  

  // Con esta función puedo indicar lógica que se va a ejecutar cuando el componente se inicie.
  ngOnInit(): void {
    this.marca = 'Chevrolet';
  }

}
