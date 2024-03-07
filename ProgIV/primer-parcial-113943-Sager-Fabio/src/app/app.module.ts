import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlightsComponent } from './components/flights/flights.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import {NgOptimizedImage} from "@angular/common";
import { BookingComponent } from './components/booking/booking.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    RoomsComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
