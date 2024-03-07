import { Component } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent {
  urlImg: string = "";

  actualizarUrl($evento: any): void{
    this.urlImg = $evento.target.value;
  }
}
