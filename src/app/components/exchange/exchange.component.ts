import { Component, Input } from '@angular/core';
import { CurrencyModel, OneCurrency } from '../../model/currencyModel';
import { ApiCurrencyService } from '../../service/api-currency.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss'],
})
export class ExchangeComponent {
  @Input() currencies: OneCurrency[];

  from: number = 0;
  to: number = 0;

  fCurrency:string
  sCurrency:string

  constructor(public exchangeService: ApiCurrencyService) {}
}
