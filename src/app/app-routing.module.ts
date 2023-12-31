import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {ContentComponent} from "./content/content.component";

const routes: Routes = [
    { path : '', component : HomeComponent},
    { path : '', component : ContentComponent},
    { path : '404', component: NotfoundComponent},
    { path : '**', redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
