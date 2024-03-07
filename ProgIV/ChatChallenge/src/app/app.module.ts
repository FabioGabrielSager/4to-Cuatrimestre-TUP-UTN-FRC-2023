import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SalaChatComponent } from './sala-chat/sala-chat.component';
import { MensajeUsuarioComponent } from './mensaje-usuario/mensaje-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    SalaChatComponent,
    MensajeUsuarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
