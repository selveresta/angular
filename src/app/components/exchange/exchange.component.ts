import { Component, Input, OnInit } from '@angular/core';
import { CurrencyModel, OneCurrency } from '../../model/currencyModel';
import { ApiCurrencyService } from '../../service/api-currency.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss'],
})
export class ExchangeComponent implements OnInit {
  from: number = 0;
  to: number = 0;

  fCurrency: string = 'EUR';
  sCurrency: string = 'USD';

  constructor(public exchangeService: ApiCurrencyService) {}

  ngOnInit(): void {}

  onSelectFCurrency(value: string) {
    console.log(value);

    if (value) {
      this.fCurrency = value;
    }
  }

  onSelectSCurrency(value: string) {
    console.log(value);
    if (value) {
      this.sCurrency = value;
    }
  }

  convertFrom() {
    let data;
    this.exchangeService
      .getRatesForOne(this.fCurrency, this.sCurrency)
      .subscribe({
        next: (res: any) => {
          data = res.data;
          this.to = this.from * data[this.sCurrency];
        },
      });
  }

  convertTo() {
    let data;
    this.exchangeService
      .getRatesForOne(this.sCurrency, this.fCurrency)
      .subscribe({
        next: (res: any) => {
          data = res.data;
          console.log(data);
          this.from = this.to * data[this.fCurrency];
        },
      });
  }
}
