import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartProduct } from '../../CartProduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  constructor(
    private _cart : CartService){};

  CartItems:any=[];

  ngOnInit():void{

    this._cart.CartItems$.subscribe(items => {
      this.CartItems = items;
    })
  }

  OnRemoveFromCart(item: any): void {
    this._cart.removeFromCart(item);
  }

}
