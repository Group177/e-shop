import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './auth-components/login/login-form/login-form.component';
import { RegisterFormComponent } from './auth-components/register/register-form/register-form.component';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import { AdminLayoutComponent } from './shared/layout/admin-layout/admin-layout.component';

const routes: Routes = [{
  path: '',
  redirectTo: "admin",
  pathMatch: 'full'
},
{
  path: 'login',
  component: LoginFormComponent
},
{
  path: "register",
  component: RegisterFormComponent
},
{
  path: "home",
  component: HomeLayoutComponent
},
{
  path: '',
  
  children: [
    {
      path: "user",
      loadChildren: () =>   import('./modules/user-side/user-side.module').then(b => b.UserSideModule)
    },
  ]
},
{
  path: '',
  component: AdminLayoutComponent,
  children: [
    {
      path: 'admin',
      loadChildren: () => import('./modules/admin-side/admin-side.module').then(b => b.AdminSideModule)
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
