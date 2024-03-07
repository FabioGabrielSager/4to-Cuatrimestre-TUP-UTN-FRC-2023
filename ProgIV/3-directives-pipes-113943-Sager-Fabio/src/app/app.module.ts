import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VeterinariaPetsComponent } from './ejer-1/veterinaria-pets/veterinaria-pets.component';
import { MascotaComponent } from './mascota/mascota.component';
import { FotoComponent } from './foto/foto.component';
import { PadreRangoComponent } from './ejer-6/padre-rango/padre-rango.component';
import { RangoComponent } from './ejer-6/rango/rango.component';
import { BarraCargaComponent } from './barra-carga/barra-carga.component';
import { TituloComponent } from './titulo/titulo.component';
import { AgePipe } from './age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VeterinariaPetsComponent,
    MascotaComponent,
    FotoComponent,
    PadreRangoComponent,
    RangoComponent,
    BarraCargaComponent,
    TituloComponent,
    AgePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
