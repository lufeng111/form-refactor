import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { mobileValidator } from '../validator/validators';
// NG_VALIDATORS 是angular/forms提供的一个常量

/*
1：Directive是指令的装饰器，指令和组件实际上是一个东西，但是指令是没有模板的，可以把指令理解为一个没有模板的组件，
在组件中selector 是一个普通的字符串selector: 'app-reactive-regist',但是在指令中selector: '[appMobileValidator]'， 这意味着指令
可以作为html的属性来用的，修改名字appMobileValidator 为mobile,就是一个指令为mobile的指令，
3：把validators.ts中的mobileValidator 方法包装到mobile 指令中：写一个providers 提供器，声明一个token是provide，
效验器的包装指令的token是固定的
4：一个token（NG_VALIDATORS）下面可以挂多个值，
*/
@Directive({
  selector: '[mobile]',
  providers: [{provide: NG_VALIDATORS, useValue: mobileValidator, multi: true}]
})
/*
指令也是一个typeScript类，下面一段代码就是一个typeScript类，

*/
export class MobileValidatorDirective {

  constructor() { }

}
