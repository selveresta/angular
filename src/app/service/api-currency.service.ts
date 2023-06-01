import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyModel, OneCurrency } from '../model/currencyModel';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCurrencyService {
  private ApiKey = 'a9aa416e5c66d5586842098e5b2f2936';
  private getAllCurrenciesURL =
    'https://api.freecurrencyapi.com/v1/currencies?apikey=f0QcEulRLLLp6trL3cPlwzUhBFFTXDIE11SWoxhH&currencies=';
  private getRatesForCurrencyURL =
    'https://api.freecurrencyapi.com/v1/latest?apikey=f0QcEulRLLLp6trL3cPlwzUhBFFTXDIE11SWoxhH&currencies=';
  private baseUrl = 'https://api.freecurrencyapi.com/v1/';

  currencies: CurrencyModel[] = [];
  currencyRate: OneCurrency[] = [];

  constructor(private http: HttpClient) {}

  getAllCurrencies(): Observable<CurrencyModel[]> {
    return this.http.get<CurrencyModel[]>(this.getAllCurrenciesURL).pipe(
      tap((c: any) => {
        for (const cur in c.data) {
          this.currencies.push(c.data[cur]);
        }
      })
    );
  }

  getRatesForCurrency(): Observable<OneCurrency[]> {
    return this.http.get<OneCurrency[]>(this.getRatesForCurrencyURL).pipe(
      tap((c: any) => {
        for (let i = 0; i < this.currencies.length; i++) {
          this.currencyRate.push({
            currency: this.rounded(c.data[this.currencies[i].code]),
          });
        }

        for (let i = 0; i < this.currencies.length; i++) {
          const element = this.currencies[i];
          element.decimal_digits = this.currencyRate[i].currency;
        }
      })
    );
  }

  private rounded(number: number) {
    return +number.toFixed(4);
  }
}
