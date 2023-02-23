import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ArticlesComponent} from "./articles/articles.component";
import {OffresEmploiComponent} from "./offres-emploi/offres-emploi.component";
import {ProductComponent} from "./product/product.component";
import {NotFoundError} from "rxjs";
import {NotFoundComponent} from "./not-found/not-found.component";
import {DetailProductComponent} from "./detail-product/detail-product.component";
import {FormProductComponent} from "./form-product/form-product.component";
import {TemplateDrivenFormComponent} from "./template-driven-form/template-driven-form.component";

const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:"full"},
  {path:'products',component:ProductComponent},
  {path:'articles',component:ArticlesComponent},
  {path:'ajoutProduit',component:FormProductComponent},
  {path:'offres-emploi',component:OffresEmploiComponent},
  {path:'detailProduct/:id',component:DetailProductComponent},
  {path : 'templateFormDriven',component:TemplateDrivenFormComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
