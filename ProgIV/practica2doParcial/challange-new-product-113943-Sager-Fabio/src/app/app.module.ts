import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {path: "add-product", component: AddProductComponent}
        ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
