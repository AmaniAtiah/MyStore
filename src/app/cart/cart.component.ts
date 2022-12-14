import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartList: Product[] = [];
  totalPrice: number = 0;
  item: number = 0;
  quantity: string[] = ['1', '2', '3', '4', '5'];

  constructor(private cartService: CartService, private route: Router) {}

  ngOnInit(): void {
    this.cartList = this.cartService.getCart();
    
    this.calculateTotal();
    this.item = this.cartList.length;


  }

  selectedChange(value: string, product: Product) {
    const index = this.cartList.indexOf(product);
    this.cartList[index] = product;
    this.cartList[index].qty = value;
    this.calculateTotal();
  }

  checkoutSuccess(firstName: string): void{
    const cartProducts: Product[] = this.cartService.getCart();
    if(cartProducts.length == 0) {
      alert("cart is empty")
    } else {
      this.cartService.clearCart();
      this.route.navigateByUrl(`success/${firstName}/${this.totalPrice}`);
    }
  }

  calculateTotal() {
    this.totalPrice = this.cartList.reduce((acc, product) => {
      this.totalPrice = parseFloat(
        (acc + product.price * Number(product.qty)).toFixed(2)
      );
      return this.totalPrice;
    }, 0);
  }

  removeProduct(id: number): void{
    const cartIndex =  this.cartList.findIndex(cart => cart.id === id);
    if(this.cartList.length > 0){
      this.cartList.splice(cartIndex,1)
      this.calculateTotal()
      this.item = this.cartList.length;

    }
  }

}
