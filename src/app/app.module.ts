import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/authentication/login/login.component';
import { SignupComponent } from './core/authentication/signup/signup.component';
import { RestorePasswordComponent } from './core/authentication/restore-password/restore-password.component';
import { FooterComponent } from './core/ui/footer/footer.component';
import { HeaderComponent } from './core/ui/header/header.component';
import { HomeComponent } from './core/ui/home/home.component';
import { LoaderComponent } from './core/ui/loader/loader.component';
import { MenuComponent } from './core/ui/menu/menu.component';
import { NotFoundComponent } from './core/ui/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    RestorePasswordComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoaderComponent,
    MenuComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
