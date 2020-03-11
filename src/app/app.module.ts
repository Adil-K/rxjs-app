import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InventoryListComponent } from './components/inventory/inventory-list/inventory-list.component';
import { InventoryItemComponent } from './components/inventory/inventory-item/inventory-item.component';
import { ShopItemComponent } from './components/shop/shop-item/shop-item.component';
import { ShopListComponent } from './components/shop/shop-list/shop-list.component';
import { CartListComponent } from './components/cart/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { ShopItemService } from './services/shop-item.service';
import { HttpClientModule } from '@angular/common/http';
import { ShopComponent } from './components/shop/shop.component';
import { ShopDetailComponent } from './components/shop/shop-detail/shop-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InventoryListComponent,
    InventoryItemComponent,
    ShopItemComponent,
    ShopListComponent,
    CartListComponent,
    CartItemComponent,
    ShopComponent,
    ShopDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ShopItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
