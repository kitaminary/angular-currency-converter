import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnChanges {
  @Input() public currencies: any;
  rate1: number = 0;
  rate2: number = 0;
  value1: number = 0;
  value2: number = 0;

  getValue = (event: any) => {
    this.value1 = event.value;
    this.value2 = +((event.value * this.rate1) / this.rate2).toFixed(2);
  };

  getValueSecond = (event: any) => {
    this.value2 = event.value;
    this.value1 = +((event.value * this.rate2) / this.rate1).toFixed(2);
  };
  currency = (event: any) => {
    this.rate1 = event.value;
    this.value2 = +((event.value * this.value1) / this.rate2).toFixed(2) || 0;
  };

  currencySecond = (event: any) => {
    this.rate2 = event.value;
    this.value1 = +((event.value * this.value2) / this.rate1).toFixed(2) || 0;
  };

  ngOnChanges(changes: SimpleChanges): void {}
}
