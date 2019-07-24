import { FormControl,FormGroup } from "@angular/forms";
import { Observable } from 'rxjs';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

/*
注意：把这两个方法从reactive-regist.component 移出来之后，就不再是typeScript类里面的方法了
而是全局的typeScript函数，需要用function来声明, 然后通过export暴露出去

然后在组件中直接引这两个方法就可以了

这样所有的组件都可以共用一些校验器

*/
export function mobileValidator(control: FormControl): any{
  var myreq = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  let valid = myreq.test(control.value);
  console.log("mobile的效验结果："+ valid);
  // 当效验结果通过是true应该返回一个空null,如果没通过需要返回一个对象
  return valid ? null : {mobile: true};
}

export function equalValidator(group: FormGroup): any{
  let password: FormControl = group.get("password") as FormControl;
  let pconfirm: FormControl = group.get("pconfirm") as FormControl;
  let valid:boolean = false;
  if(password && pconfirm) {
    valid = (password.value === pconfirm.value);
  }
  console.log("密码的效验结果："+ valid);
  // return valid ? null : {equal: true};  下面把错误消息通过效验器提供，而不是在模板上控制显示隐藏
  return valid ? null : {equal: {descs: "密码和确认密码要保持一致"}};
}

// 异步效验器
export function mobileAsyncValidator(control: FormControl): any{
  var myreq = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  let valid = myreq.test(control.value);
  // console.log("mobile的效验结果："+ valid);
  // 当效验结果通过是true应该返回一个空null,如果没通过需要返回一个对象
  return of(valid ? null : { mobile: true }).pipe(delay(5000));
  // 把整个返回值放到一个流Observable.of里面去返回的， delay(5000)是延迟五秒，是为了模拟一下调服务器，padding状态就是在调远程服务去效验状态，

}
