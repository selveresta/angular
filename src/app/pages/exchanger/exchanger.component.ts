import {Component, OnInit} from '@angular/core';
import {ApiCurrencyService} from "../../service/api-currency.service";

@Component({
  selector: 'app-exchanger',
  templateUrl: './exchanger.component.html',
  styleUrls: ['./exchanger.component.scss']
})
export class ExchangerComponent implements  OnInit{
  constructor(public exchangeService: ApiCurrencyService) {
  }

  ngOnInit(): void {
    // this.exchangeService.getAllCurrencies().subscribe()
  }
}
