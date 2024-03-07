import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TripListComponent} from "./components/trips/trip-list/trip-list.component";
import {HomeComponent} from "./components/home/home.component";
import {TripEditComponent} from "./components/trips/trip-edit/trip-edit.component";

const routes: Routes = [
    {
        path: 'trips',
        children: [
            {path: 'list', component: TripListComponent},
            {path: 'edit/:tripId', component: TripEditComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}