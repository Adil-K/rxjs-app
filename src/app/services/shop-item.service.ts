import { ShopItemsPage, IShopItemsPageDTO } from './../models/shop-items-page.model';
import { ShopItem } from './../models/shop-item.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShopItemService {
  constructor(private httpClient: HttpClient) {}

  getItems(): Observable<ShopItemsPage> {
    return this.httpClient.get<IShopItemsPageDTO>(`https://pokeapi.co/api/v2/item`).pipe(
      map(result => {
        return new ShopItemsPage(result);
      }),
    );
  }

  getItem(url): Observable<ShopItem> {
    return this.httpClient.get<any>(url).pipe(
      map(item => {
        return new ShopItem(item);
      }),
    );
  }
}
