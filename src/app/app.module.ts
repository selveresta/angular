import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExchangerComponent } from './pages/exchanger/exchanger.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CurrencyHeaderComponent } from './components/currency-header/currency-header.component';
import {HttpClientModule} from "@angular/common/http";
import { OneCurrencyComponent } from './components/one-currency/one-currency.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeComponent,
    NavbarComponent,
    ExchangerComponent,
    FooterComponent,
    HomeComponent,
    CurrencyHeaderComponent,
    OneCurrencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
