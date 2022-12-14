import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../model/product';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  products: Product[] = []


  @Output() addProduct: EventEmitter<Product> = new EventEmitter;


  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      this.products = res

    })

   
    
  }


  addProductToCart(product: Product):void {
    this.addProduct.emit(product)
  }

}
