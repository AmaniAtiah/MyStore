import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../model/product';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() product: Product;
    products: Product[] =[];
  selectedItem = '1';
  quantity: string[] = ['1', '2', '3', '4', '5'];


  constructor(private cartService: CartService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      qty: ''


    }
  }

  ngOnInit(): void {
  }

  selectedChange(value: any) {
    this.selectedItem = value;
  }
  
  addToCart(product:Product): void {
     const cartProducts: Product[] = this.cartService.getCart();

    let productInCart = cartProducts.find((ele) => ele.id === product.id);
    if (productInCart) {
      alert("already added")
    } else {
    this.products.push(Object.assign(product, { qty: this.selectedItem }));
    this.cartService.addToCart(product);
    alert("Added!" + product.name);
    }
    
  }

}
