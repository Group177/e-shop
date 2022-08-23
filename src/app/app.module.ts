import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './auth-components/login/login-form/login-form.component';
import { RegisterFormComponent } from './auth-components/register/register-form/register-form.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { CartSectionComponent } from './components/cart-section/cart-section.component';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import { AdminLayoutComponent } from './shared/layout/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './shared/layout/user-layout/user-layout.component';
import { AdminNavbarComponent } from './shared/layout/admin-navbar/admin-navbar.component';
import { HeaderComponent } from './shared/section/header/header.component';
import { FooterComponent } from './shared/section/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HomeSectionComponent,
    CartSectionComponent,
    HomeLayoutComponent,
    AdminLayoutComponent,
    UserLayoutComponent,
    AdminNavbarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
