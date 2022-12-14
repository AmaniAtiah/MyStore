import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent

  },
  {
    path: 'product/:id',
    component: ProductDetailComponent

  },

  {
    path: 'cart',
    component: CartComponent

  },
  {
    path: 'success/:firstName/:totalPrice',
    component: CheckoutSuccessComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
