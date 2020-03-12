import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component';
import { ShopDetailComponent } from './components/shop/shop-detail/shop-detail.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'shop/detail/:id',
    component: ShopDetailComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
