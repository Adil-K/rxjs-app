import { CartItem } from './../models/cart-item.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];

  constructor() {}

  getItems(): CartItem[] {
    return this.cartItems.slice();
  }

  addItem(item: CartItem) {
    // this.cartItems = this.cartItems.filter(res => item !== res);
    console.log(item);
    this.cartItems.push(item);
    console.log(this.cartItems);
  }
}
