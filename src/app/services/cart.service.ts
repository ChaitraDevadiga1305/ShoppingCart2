import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private CartItemsSubject = new BehaviorSubject<any[]>([]);
  CartItems$ = this.CartItemsSubject.asObservable();

  constructor(
    private _http:HttpClient
  ) { }

  OnAddToCart(item: any): void {
    const currentCartItems = this.CartItemsSubject.getValue();
    const updatedCartItems = [...currentCartItems, item];
    this.CartItemsSubject.next(updatedCartItems);
  }

  //To remove the item
  removeFromCart(itemToRemove: any): void {
    const currentCartItems = this.CartItemsSubject.getValue();
    const updatedCartItems = currentCartItems.filter(item => item !== itemToRemove);
    this.CartItemsSubject.next(updatedCartItems);
  }

  getCartItems(): any[] {
    return this.CartItemsSubject.getValue();
  }

  clearCart(): void {
    this.CartItemsSubject.next([]);
  }
}
