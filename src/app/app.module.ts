import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';

import { AppRoutingModule }     from './app-routing/app-routing.module';
import { AboutComponent } from './about/about.component';
import { CaptionComponent } from './caption/caption.component';
import { TopProductsComponent } from './top-products/top-products.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ServiceComponent } from './service/service.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    HomeComponent,
    AboutComponent,
    CaptionComponent,
    TopProductsComponent,
    FooterComponent,
    ProductsComponent,
    ServiceComponent,
    ContactsComponent,
    ProdDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
