import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginFormComponent } from '../components/login-form/login-form.component';
import { RegisterFormComponent } from '../components/register-form/register-form.component';


@NgModule({
    declarations: [LoginPageComponent, LoginFormComponent, RegisterFormComponent],
    imports: [
        CommonModule,
        IndexRoutingModule
    ]
})
export class IndexModule { }
