import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HerbListComponent } from './components/herb-list/herb-list.component';
import { HerbAddComponent } from './components/herb-add/herb-add.component';
import {HttpClientModule} from "@angular/common/http";
import { HerbDetailPipe } from './pipes/herb-detail.pipe';
import {RouterOutlet} from "@angular/router";
import {AppRountingModule} from "./app-rounting.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HerbListComponent,
    HerbAddComponent,
    HerbDetailPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterOutlet,
    AppRountingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
