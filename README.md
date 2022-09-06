# AngularCurrencyConverter

[DEMO](https://kitaminary.github.io/angular-currency-converter/)

# Header с курсом валют
1. В header-е необходимо отображать актуальный курс валют (USD, EUR) по отношению к гривне (UAH)
2. Актуальный курс валют должен приходить с любого публичного API

# Компонент с конвертацией
1. Для одной валюты должен быть свой input и select. 
2. отдельный input + select для первой валюты, и отдельный input + select для второй валюты
3. в input задается число, чтобы указать кол-во единиц для конвертирования
4.в select должно быть не менее трех валют - UAH, USD, EUR.
5. конвертация должна происходить в обоих направлениях 
6. при изменении значения в первой валюте, должно пересчитываться значение во второй, и наоборот
7. при изменении валюты в каждом select-е, конвертация обеих валют должна пересчитываться корректно


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
