import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../model/product';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  products: Product[] = [];
  id!: number;
  selectedItem = '1';
  quantity: string[] = ['1', '2', '3', '4', '5'];

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.id = Number(params.get('id'));
    })
    this.productService.getProducts().subscribe(res =>{
      this.products = res;
      this.product = this.getProductById(this.id)
    })


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
  getProductById(id: number) {
    return this.products.filter((product) => product.id === id)[0];
  }


}
