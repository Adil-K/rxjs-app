import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  @Input()
  cartItems: CartItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
