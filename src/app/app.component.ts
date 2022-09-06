import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import Currency from 'src/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-currency-converter';
  public currencies: Object = [];
  currentUSD: any = null;
  currentEUR: any = null;
  date: string = '';

  GetCurrency = () => {
    this.currentUSD = this.currencies.constructor(this.currencies)[0].find((currency: Currency ) => currency.cc === 'USD');
    this.currentEUR = this.currencies.constructor(this.currencies)[0].find((currency: Currency ) => currency.cc === 'EUR');
    this.date = this.currencies.constructor(this.currencies)[0][0].exchangedate;
  };

  constructor(private service: PostService) {}
  ngOnInit() {
    this.service
      .getPosts()

      .subscribe(async (response) => {
        this.currencies = response;
        this.GetCurrency();
      });
  }
}
