import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalCost: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    console.log(this.cartItems);
    this.getTotalCost();
  }

  getTotalCost(): void {
    const eachCost = [];
    this.cartItems.forEach(item => {
      eachCost.push(item.cost * item.amount);
    });
    if (this.cartItems.length < 1) {
      return;
    }
    this.totalCost = eachCost.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
}
