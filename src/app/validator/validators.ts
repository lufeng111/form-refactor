import { FormControl,FormGroup } from "@angular/forms";

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
  let valid:boolean = (password.value === pconfirm.value);
  console.log("密码的效验结果："+ valid);
  return valid ? null : {equal: true};
}
