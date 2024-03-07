import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFilmComponent } from './components/add-film/add-film.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ListFilmsComponent } from './components/list-films/list-films.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFilmComponent,
    HomeComponent,
    ListFilmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: "add-film", component: AddFilmComponent},
      {path: "list-films", component: ListFilmsComponent},
    ]),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
