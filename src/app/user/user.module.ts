import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CartComponent } from './pages/cart/cart.component';
import { PendingOrdersComponent } from './pages/pending-orders/pending-orders.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartItemComponent } from './component/cart-item/cart-item.component';
import { CheckoutItemComponent } from './component/checkout-item/checkout-item.component';
import { DashboardItemComponent } from './component/dashboard-item/dashboard-item.component';
import { PendingItemComponent } from './component/pending-item/pending-item.component';
import { ProfileItemComponent } from './component/profile-item/profile-item.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CartComponent,
    PendingOrdersComponent,
    ProfileComponent,
    CheckoutComponent,
    CartItemComponent,
    CheckoutItemComponent,
    DashboardItemComponent,
    PendingItemComponent,
    ProfileItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
