import { ShopItemsPage } from './../../../models/shop-items-page.model';
import { ShopItemService } from './../../../services/shop-item.service';
import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ShopItem } from 'src/app/models/shop-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],
})
export class ShopListComponent implements OnInit {
  shopItemsPage: ShopItemsPage;
  shopItems: ShopItem[] = [];
  // selectedItem: ShopItem;
  constructor(private shopItemService: ShopItemService, private router: Router) {}

  ngOnInit(): void {
    this.getItemsPage();
    this.shopItemService.itemSelected.subscribe({
      next: selected => {
        // this.selectedItem = selected;
        this.router.navigate(['shop/detail', selected.id]);
      },
    });
  }

  getItemsPage(): void {
    this.shopItemService.getItems().subscribe({
      next: page => {
        this.shopItemsPage = page;
        this.populateItemlist(page.results);
      },
    });
  }

  getItem(item): void {
    this.shopItemService.getItem(item.url).subscribe({
      next: shopItem => this.shopItems.push(shopItem),
    });
  }

  nextPage(): void {
    this.shopItemService.getNextPage(this.shopItemsPage.next).subscribe({
      next: page => {
        this.shopItemsPage = page;
        this.populateItemlist(page.results);
      },
    });
  }

  populateItemlist(list): void {
    list.forEach(item => {
      this.getItem(item);
    });
  }
}
