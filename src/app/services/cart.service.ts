import { CartItem } from './../models/cart-item.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];
  private index = new CartItem();

  constructor() {}

  getItems(): CartItem[] {
    return this.cartItems.slice();
  }

  addItem(item: CartItem) {
    if (item.id in this.index) {
      this.index[item.id].amount += 1;
    } else {
      this.index[item.id] = item;
      item.amount = 1;
      this.cartItems.push(item);
    }
    console.log(this.cartItems);
  }

  removeItem(id) {
    // this.cartItems = this.cartItems.filter(item => item.id !== id);
  }
}
