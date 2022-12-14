import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { CreateFormComponent } from './create-form/create-form.component';
import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    CartComponent,
    ProductListComponent,
    ProductDetailComponent,
    CreateFormComponent,
    CheckoutSuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
