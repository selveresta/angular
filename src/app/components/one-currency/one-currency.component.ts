import { Component, Input } from '@angular/core';
import { CurrencyModel } from '../../model/currencyModel';

@Component({
  selector: 'app-one-currency',
  templateUrl: './one-currency.component.html',
  styleUrls: ['./one-currency.component.scss'],
})
export class OneCurrencyComponent {
  @Input() currency: CurrencyModel;

  constructor() {}
}
