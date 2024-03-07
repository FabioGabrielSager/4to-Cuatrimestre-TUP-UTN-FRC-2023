import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrearMateriaComponent } from './crear-materia/crear-materia.component';
import { InscribirAlumnoComponent } from './inscribir-alumno/inscribir-alumno.component';
import { ListarInscripcionesComponent } from './listar-inscripciones/listar-inscripciones.component';
import { FormsModule, NgForm } from '@angular/forms';
import { MateriasService } from './services/materias-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CrearMateriaComponent,
    InscribirAlumnoComponent,
    ListarInscripcionesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    MateriasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
