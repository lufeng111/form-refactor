# FormRefactor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## 表单效验
<!-- 
1：angular的效验器

2：效验效应式表单

3：效验模板式表单

 -->
## 表单效验的状态字段
<!-- 
touched和 untouched: 这两个字段用来判断用户是否访问过一个字段，也就是这个字段是否获取到焦点，如果获取到焦点touched就是true, untouched 就是false, 反之，


pristine和dirty：如果一个字段的值从来没被修改过，pristine 就是true, dirty就是false

pending: 正在效验是否合法
比如手机号： 在修改过程中，会根据修改的值，不断地更改附加的一些样式，如：class="ng-dirty ng-valid ng-touched" ，可以根据这些样式来定义这些字段显示的样式，

 -->
