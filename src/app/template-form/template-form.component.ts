import { Component, OnInit } from '@angular/core';
import { Validators, NgForm } from '@angular/forms';
/*
5: 在模板式表单中，由于组件中没有编程控制的数据模型，所以想在代码里了解表单的任何信息，都要从模板上把需要的信息传给组件控制器，
比如在提交onSubmit表单的时候，如果想知道表单是否有效，只能在onSubmit方法里面传myForm.valid (onSubmit)="onSubmit(myForm.value, myForm.valid)
然后在onSubmit 里面去判断这个属性，

*/
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(value: any, valid: boolean){
    console.log(value);
    console.log(valid);
  }

  mobileValid: boolean = true;
  mobileUntouched: boolean = true;
  onMobileInput(form: NgForm){
    if(form){
      this.mobileValid = form.form.get("mobile").valid;
      this.mobileUntouched = form.form.get("mobile").untouched;
    }
  }

}
