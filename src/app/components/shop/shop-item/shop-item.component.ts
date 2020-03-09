import { Component, OnInit, Input } from '@angular/core';
import { ShopItem } from 'src/app/models/shop-item.model';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss'],
})
export class ShopItemComponent implements OnInit {
  @Input()
  shopItem = new ShopItem();

  constructor() {}

  ngOnInit(): void {}
}
