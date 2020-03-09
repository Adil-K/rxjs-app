import { ShopItem, IShopItemDTO } from './../models/shop-item.model';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShopItemService {
  constructor(private httpClient: HttpClient) {}

  getItems(): Observable<any[]> {
    return this.httpClient.get<any>(`https://pokeapi.co/api/v2/item`).pipe(
      map(shopItems => {
        console.log(shopItems);
        return shopItems.results.map(item => {
          return item;
        });
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
