import { ShopItemsPage, IShopItemsPageDTO } from './../models/shop-items-page.model';
import { ShopItem } from './../models/shop-item.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShopItemService {
  itemSelected = new EventEmitter<ShopItem>();

  constructor(private httpClient: HttpClient) {}

  getItems(): Observable<ShopItemsPage> {
    return this.httpClient.get<IShopItemsPageDTO>(`https://pokeapi.co/api/v2/item`).pipe(
      map(result => {
        return new ShopItemsPage(result);
      }),
    );
  }

  getItem(url: string): Observable<ShopItem> {
    return this.httpClient.get<any>(url).pipe(
      map(item => {
        return new ShopItem(item);
      }),
    );
  }

  getItemById(id: string): Observable<ShopItem> {
    return this.httpClient.get<any>(`https://pokeapi.co/api/v2/item/${id}`).pipe(
      map(item => {
        return new ShopItem(item);
      }),
    );
  }

  getNextPage(url: string): Observable<ShopItemsPage> {
    return this.httpClient.get<IShopItemsPageDTO>(url).pipe(
      map(result => {
        return new ShopItemsPage(result);
      }),
    );
  }
}
