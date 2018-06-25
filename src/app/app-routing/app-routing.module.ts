import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './../app.component';
import { HeaderComponent } from './../header/header.component';
import { HomeComponent } from './../home/home.component';
//import { FooterComponent } from './../footer/footer.component';
import { BannerComponent } from './../banner/banner.component';
import { ProductsComponent } from './../products/products.component';
import { ServiceComponent } from  './../service/service.component';
import { ContactsComponent } from  './../contacts/contacts.component';
import { ProdDetailComponent } from  './../prod-detail/prod-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', redirectTo: '', component: HomeComponent },
  { path: 'products/:id', component: ProductsComponent },
  { path: 'service', component : ServiceComponent },
  { path: 'contact', component : ContactsComponent },
  { path: 'prodDetail/:prodId/:subId', component : ProdDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
