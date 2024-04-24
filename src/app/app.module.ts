import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { TotalPricePipe } from './pipes/TotalPrice.pipe';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';


const appRoute: Routes=[
  { path:"", redirectTo:"Home", pathMatch:'full'},
  { path:"Home", component: HomePageComponent},
  { path:"AllProducts", component:ProductsComponent},
  { path:"Cart", component:CartComponent},
  { path:"ContactUs", component:ReactiveformComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductsComponent,
    CartComponent,
    TotalPricePipe,
    ReactiveformComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
