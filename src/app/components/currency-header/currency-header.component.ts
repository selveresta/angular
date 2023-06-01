import { Component, Input, OnInit } from '@angular/core';
import { CurrencyModel, OneCurrency } from '../../model/currencyModel';
import { ApiCurrencyService } from '../../service/api-currency.service';

@Component({
  selector: 'app-currency-header',
  templateUrl: './currency-header.component.html',
  styleUrls: ['./currency-header.component.scss'],
})
export class CurrencyHeaderComponent implements OnInit {
  @Input() currencies: CurrencyModel[] = [];
  @Input() currencyRate: OneCurrency[] = [];

  constructor(public exchangeService: ApiCurrencyService) {}
  ngOnInit(): void {
    this.exchangeService.getAllCurrencies().subscribe()

    this.exchangeService.getRatesForCurrency().subscribe();
  }

  
}
