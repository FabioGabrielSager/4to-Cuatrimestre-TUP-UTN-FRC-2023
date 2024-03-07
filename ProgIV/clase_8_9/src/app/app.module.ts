import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { CambioColorDirective } from './cambio-color.directive';
import { NuevoAutoComponent } from './nuevo-auto/nuevo-auto.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ListadoComponent } from './listado/listado.component';
import { AutoService } from './services/auto.service';
import { CalcularImporteService } from './services/calcular-importe.service';
import { CalcularImporteRegularService } from './services/calcular-importe-regular.service';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    CambioColorDirective,
    NuevoAutoComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    // AutoService
    {
      provide: CalcularImporteService,
      useClass: CalcularImporteRegularService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
