import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.scss']
})
export class ReactiveRegistComponent implements OnInit {

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
     username: ['1','2','3'],
     mobile: [''],
     passwordsGroup: fb.group({
       password: [''],
       pconfirm: [''],
     })
   })
  // fb.group 还可以添加一个参数，用于校验fb.group
  // },{})
  }

  onSubmit(){
    console.log(this.formModel.value);
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
