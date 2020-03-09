import { ShopItemService } from './../../../services/shop-item.service';
import { Component, OnInit } from '@angular/core';
import { ShopItem } from 'src/app/models/shop-item.model';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],
})
export class ShopListComponent implements OnInit {
  items: ShopItem[] = [];
  constructor(private shopItemService: ShopItemService) {}

  ngOnInit(): void {
    this.shopItemService.getItems().subscribe(result => {
      result.forEach(item => {
        this.shopItemService.getItem(item.url).subscribe(shopItem => this.items.push(shopItem));
      });
    });

    console.log(this.items);

    // this.items.forEach(item => {
    //   this.shopItemService.getItem(item.url);
    // });
  }
}
