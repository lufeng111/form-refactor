import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReacyiveFormComponent } from './reacyive-form/reacyive-form.component';
import { ReactiveRegistComponent } from './reactive-regist/reactive-regist.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReacyiveFormComponent,
    ReactiveRegistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
