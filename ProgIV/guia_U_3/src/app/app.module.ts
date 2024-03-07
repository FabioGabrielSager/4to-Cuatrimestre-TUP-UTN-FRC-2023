import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMoviesComponent } from './src/components/list-movies/list-movies.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {NgbModule, NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import {MovieDetailsComponent} from "./src/components/movie-details/movie-details.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPagination,
    RouterModule.forRoot([
      {path: '', component: ListMoviesComponent},
      {path: 'movieDetails/:imdbID', component: MovieDetailsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
