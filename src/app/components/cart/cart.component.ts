import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  constructor(
    private _product:ProductsService){};

  products!: {
    id: number; name: string; description: string;
    price: number; instock: string; image: string; addedToCart:boolean
  };

  CartProduct:any=[];

  ngOnInit():void{
    this.products = this._product.addCartProducts;
    this.CartProduct=this.products
    }

  OnRemovefromCartClick(CartProduct: {id: number; name: string; description: string;
      price: number; instock: string; image: string; addedToCart:boolean}){
      this._product.RemoveFromCart(CartProduct);

      this.CartProduct=this._product.GetAllProducts();
      CartProduct.addedToCart=false;
    }

}
