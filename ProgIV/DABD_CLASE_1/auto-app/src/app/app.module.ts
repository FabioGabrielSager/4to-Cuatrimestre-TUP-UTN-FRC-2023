import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiAutoComponent } from './autos/mi-auto/mi-auto.component';
import { MarcaComponent } from './marca/marca.component';
import { PiezaComponent } from './pieza/pieza.component';
import { ListadoAutosComponent } from './listado-autos/listado-autos.component';
import { TituloComponent } from './titulo/titulo.component';
import { CambioColorDirective } from './cambio-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    MiAutoComponent,
    MarcaComponent,
    PiezaComponent,
    ListadoAutosComponent,
    TituloComponent,
    CambioColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
