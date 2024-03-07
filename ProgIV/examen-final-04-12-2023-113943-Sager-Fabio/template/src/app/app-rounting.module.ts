import {NgModule} from "@angular/core";
import {Router, RouterModule, Routes} from "@angular/router";
import {HerbListComponent} from "./components/herb-list/herb-list.component";
import {HerbAddComponent} from "./components/herb-add/herb-add.component";

const routes: Routes = [
  {
    path: 'herbs',
    children: [
      { path: 'list', component: HerbListComponent },
      { path: 'add', component: HerbAddComponent }
    ]
  },
  { path: '', redirectTo: '/herbs/list', pathMatch: "full" },
  { path: '**', redirectTo: '/herbs/list', pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  }
)
export class AppRountingModule {
}
