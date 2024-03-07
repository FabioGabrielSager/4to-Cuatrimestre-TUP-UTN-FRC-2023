import { Component } from '@angular/core';

@Component({
  selector: 'co-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-challange';
  displayMateriaForm: boolean = false;
  displayInscribirForm: boolean = false;
  displayListadoInscripciones: boolean = false;

  displayAndHideComponents($event: any){
    console.log($event);
    switch($event.target.id)
    {
      case "crearMatNavBtn": {
        this.displayMateriaForm = true;
        this.displayInscribirForm = false;
        this.displayListadoInscripciones = false;
        break;
      }
      case "inscribirNavBtn": {
        this.displayMateriaForm = false;
        this.displayInscribirForm = true;
        this.displayListadoInscripciones = false;
        break;
      }
      case "listarInsNavBtn": {
        this.displayMateriaForm = false;
        this.displayInscribirForm = false;
        this.displayListadoInscripciones = true;
        break;
      }
      case "homeNavBtn": {
        this.displayMateriaForm = false;
        this.displayInscribirForm = false;
        this.displayListadoInscripciones = false;
        break;
      }
    }
  }
}
