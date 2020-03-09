import { ShopItemsPage } from './../../../models/shop-items-page.model';
import { ShopItemService } from './../../../services/shop-item.service';
import { Component, OnInit } from '@angular/core';
import { ShopItem } from 'src/app/models/shop-item.model';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],
})
export class ShopListComponent implements OnInit {
  shopItemPage: ShopItemsPage;
  shopItems: ShopItem[] = [];
  constructor(private shopItemService: ShopItemService) {}

  ngOnInit(): void {
    this.shopItemService.getItems().subscribe(result => (this.shopItemPage = result));

    console.log(this.shopItemPage);

    this.shopItemPage.results.forEach(item => {
      this.shopItemService.getItem(item.url).subscribe(shopItem => this.shopItems.push(shopItem));
    });
  }
}
