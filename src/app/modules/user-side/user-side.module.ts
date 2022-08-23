import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CartSectionComponent } from './cart-section/cart-section.component';



@NgModule({
  declarations: [
    UserDashboardComponent,
    CartSectionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserSideModule { }
