import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './../contacts/contacts.component';
import { HomeComponent } from './../home/home.component';
import { ProdDetailComponent } from './../prod-detail/prod-detail.component';
import { ProductsComponent } from './../products/products.component';
import { ServiceComponent } from './../service/service.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', redirectTo: '', component: HomeComponent },
  { path: 'products/:id', component: ProductsComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'contact', component: ContactsComponent },
  { path: 'prodDetail/:prodId/:subId', component: ProdDetailComponent },
  { path: 'software/:id', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
