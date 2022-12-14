import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProduct: Product[] = []

  constructor() { }


  getCart() {
    return this.cartProduct;
    
  }
  
  addToCart(product:Product) {
    this.cartProduct.push(product);
    return this.cartProduct;
  }

  clearCart() {
    this.cartProduct = [];
    return this.cartProduct;
  }



}
