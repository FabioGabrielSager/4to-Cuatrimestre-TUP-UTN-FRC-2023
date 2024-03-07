import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TripListComponent } from './components/trips/trip-list/trip-list.component';
import { TripEditComponent } from './components/trips/trip-edit/trip-edit.component';
import { TripStopEditComponent } from './components/trips/trip-stop-edit/trip-stop-edit.component';
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './components/home/home.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TripListComponent,
    TripEditComponent,
    TripStopEditComponent,
    HomeComponent,
  ],
    imports: [
        BrowserModule,
        NgbModule,
        RouterOutlet,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
