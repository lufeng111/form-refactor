import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { mobileValidator, equalValidator, mobileAsyncValidator } from '../validator/validators';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.scss']
})
export class ReactiveRegistComponent implements OnInit {
  /*
  效验器其实就是一个方法,这个方法名字随便定义xxxx，接收一个参数，这个参数必须是AbstractControl类型的，然后接收一个返回值,
  这个返回值可以是任意结构的一个对象{[]}，但是这个对象的key必须是string类型的，值可以是任意类型的，这个方法就可以作为angular的效验器

  但是在自定义自己的效验器之前，angular提供了一组预定义的效验器:reqiured,minlength,maxlength，pattern等，这些效验器都是定义在angular的forms模块中
  的Validators类中，
  预定义的效验器的使用：通过配置formModel表单模型使用，在响应式表单中可以把效验器作为模型类的构造函数的参数传入到模型类中
  比如说：username的模型类就是formControl ，在这个构造函数里，第一个是默认的值，第二个就是效验器

  现在username 这个字段就是必填的了，也可以提供一组效验器，达到多个效验的效果
  username: ['', Validators.required], 只有一个效验器的写法，required现在username是必填的
  username: ['', [Validators.required, Validators.minLength(6)]], // 多个效验器的写法，

  定义好效验器之后，就可以通过模型对象的Valid属性来判断字段当前的值是否合法，this.formModel.get('username').valid; 通过formModel 获得
  get('username') username 属性，判断这个属性的valid

  */
//  xxx(control: AbstractControl): {[key: string]: any}{
//   Validators.required
//   return null;
// }


  /* mobile 的自定义效验器， 自定义一个效验条件
  因为mobile 字段类型是FormControl,所以修改AbstractControl为FormControl
  然后把效验器加到mobile 字段上 this.mobileValidator
  */
  // mobileValidator(control: FormControl): any{
  //   var myreq = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  //   let valid = myreq.test(control.value);
  //   console.log("mobile的效验结果："+ valid);
  //   // 当效验结果通过是true应该返回一个空null,如果没通过需要返回一个对象
  //   return valid ? null : {mobile: true};
  // }

  /* passwordsGroup 自定义多个效验器的条件

  */
// equalValidator(group: FormGroup): any{
//   let password: FormControl = group.get("password") as FormControl;
//   let pconfirm: FormControl = group.get("pconfirm") as FormControl;
//   let valid:boolean = (password.value === pconfirm.value);
//   console.log("密码的效验结果："+ valid);
//   return valid ? null : {equal: true};
// }




  /*
  现在用FormBuilder重构响应式表单:
  FormBuilder 是angular提供的一个工具，本身并没有提供任何新的功能，但是简化了定义表单数据结构的语法，相对于直接使用FormControl
  等，使用FormBuilder可用用更少的代码定义出同样的数据结构，
  1: fb.group: 相当于new了一个FormGroup()
  2: FormBuilder 还允许用一个数组['']来实例化一个FormControl的实例new FormControl()，数组的第一个元素是初始化的值'1'，
  第二个元素'2' 是校验方法，第三个元素'3' 是一个异步的校验方法，
  */
 formModel: FormGroup;
//  使用依赖注入进来fb，类型是FormBuilder,
 constructor(fb: FormBuilder) {
   this.formModel = fb.group({
    //  username: ['', Validators.required], 只有一个效验器的写法，required现在username是必填的
     username: ['', [Validators.required, Validators.minLength(6)]], // 多个效验器的写法，
    //  mobile: ['', this.mobileValidator],
     mobile: ['', mobileValidator, mobileAsyncValidator],
     passwordsGroup: fb.group({
       password: ['', Validators.minLength(6)],
       pconfirm: ['',Validators.minLength(6)],
    //  },{validator: this.equalValidator})
     },{validator: equalValidator})
   })
  // fb.group 还可以添加一个参数，用于校验fb.group
  // },{})
  }

  onSubmit(){
    // 当username满足所有效验器的规则时，这个属性就是true ,否则就是false
    // let isValid: Boolean = this.formModel.get('username').valid;
    // console.log("username效验结果"+isValid);
    // 这个效验结果，还可以通过formControl的error属性获得效验器返回的错误信息
    // let errors:any = this.formModel.get("username").errors;
    // console.log("username效验的错误信息是"+JSON.stringify(errors));
    // console.log(this.formModel.value);


    /*
    通过formModel来判断整个表单中所有的值是不是都是合法的
    this.formModel.valid中的valid 只要有一个valid是false那么就是false，

    */
    if(this.formModel.valid){
      console.log(this.formModel.value)
    }


  }



  // formModel: FormGroup;
  // constructor() {
  //   this.formModel = new FormGroup({
  //     username: new FormControl(),
  //     mobile: new FormControl(),
  //     passwordsGroup: new FormGroup({
  //       password: new FormControl(),
  //       pconfirm: new FormControl()
  //     })
  //   })
  //  }

  //  onSubmit(){
  //    console.log(this.formModel.value);
  //  }

  ngOnInit() {
  }

}
