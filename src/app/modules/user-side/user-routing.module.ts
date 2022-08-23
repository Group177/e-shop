import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CartSectionComponent } from './cart-section/cart-section.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: "full"
},{
  path: "dashboard",
  component: UserDashboardComponent
},
{
  path: "cart-section",
  component: CartSectionComponent
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserRoutingModule { }
