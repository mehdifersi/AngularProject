import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ArticlesComponent} from "./articles/articles.component";
import {OffresEmploiComponent} from "./offres-emploi/offres-emploi.component";
import {ProductComponent} from "./product/product.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Product',component:ProductComponent},
  {path:'Offre-emploi',component:OffresEmploiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
