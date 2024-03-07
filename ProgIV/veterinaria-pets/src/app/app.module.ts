import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VeterinariaPetsComponent } from './veterinaria-pets/veterinaria-pets.component';
import { ListadoMascotaComponent } from './Mascotas/listado-mascota/listado-mascota.component';
import { FotoComponent } from './foto/foto.component';
import { PadreRangoComponent } from './ejer-6/padre-rango/padre-rango.component';
import { RangoComponent } from './ejer-6/rango/rango.component';
import { BarraCargaComponent } from './barra-carga/barra-carga.component';
import { AgePipe } from './Pipes/age.pipe';
import { TitleDirective } from './CustomDirectives/title.directive';
import { CrearMascotaComponent } from './Mascotas/crear-mascota/crear-mascota.component';
import {FormsModule} from "@angular/forms";
import { HolaMundoPipe } from './Pipes/hola-mundo.pipe';
import { RandomDirective } from './CustomDirectives/random.directive';

@NgModule({
  declarations: [
    AppComponent,
    VeterinariaPetsComponent,
    ListadoMascotaComponent,
    FotoComponent,
    PadreRangoComponent,
    RangoComponent,
    BarraCargaComponent,
    AgePipe,
    TitleDirective,
    CrearMascotaComponent,
    HolaMundoPipe,
    RandomDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
