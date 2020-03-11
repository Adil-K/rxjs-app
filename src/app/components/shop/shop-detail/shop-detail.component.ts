import { ShopItemService } from './../../../services/shop-item.service';
import { Component, OnInit } from '@angular/core';
import { ShopItem } from 'src/app/models/shop-item.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss'],
})
export class ShopDetailComponent implements OnInit {
  item = new ShopItem();
  id: string;
  cartItem = new CartItem();

  constructor(
    private shopItemService: ShopItemService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.shopItemService.getItemById(this.id).subscribe({
      next: result => {
        this.item = result;
      },
    });
  }

  handleAdd(): void {
    const itemAmount = 1;
    this.cartItem = {
      id: this.item.id,
      name: this.item.names[2].name,
      amount: itemAmount,
      cost: this.item.cost,
      sprite: this.item.sprites.default,
    };
    if (this.item.cost) {
      this.cartService.addItem(this.cartItem);
    }
  }

  handleBack(): void {
    this.router.navigate(['shop']);
  }
}
