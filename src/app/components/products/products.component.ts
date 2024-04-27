import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { CartProduct } from '../../CartProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  
})
export class ProductsComponent implements OnInit {

constructor(
  private _products: ProductsService,
  private _cart: CartService
){};

product:{id: number; name: string; description: string;
  price: number; instock: string; image: string; addedToCart:boolean}[]=[];


ngOnInit(): void {
  this._products.GetAllProducts().subscribe(data => {
    this.product= data;
  });
}

OnAddToCart(product:{id: number; name: string; description: string;
  price: number; instock: string; image: string; addedToCart:boolean}){
  this._cart.OnAddToCart(product);
  product.addedToCart=true;
  }
}
