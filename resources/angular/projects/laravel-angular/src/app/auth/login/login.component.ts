import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginRequest, LoginCredentials } from '../models/login-request';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
interface Model {
   readonly userName: string;
   readonly password: string;
   readonly remember: boolean;
 }

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form = new FormGroup({});
    model: Partial<Model> = { userName: '', password: '' };
    options: FormlyFormOptions = {};
    fields: FormlyFieldConfig[] = [
        {
            key: 'userName',
            type: 'input',
            templateOptions: {
                label: 'User Id',
                placeholder: 'Email, Username or Phone',
                required: true,
                addonLeft: {
                    class: 'fa fa-user'
                }
            }
        },
        {
            key: 'password',
            type: 'input',
            hideExpression: '!model.userName',
            templateOptions: {
                label: 'Password',
                type: 'password',
                placeholder: 'Enter your password',
                description: 'Never share your password',
                required: true,
                addonLeft: {
                    class: 'fa fa-lock'
                }
            }
        },
        {
            key: 'remember',
            type: 'checkbox',
            defaultValue: false,
            templateOptions: { label: 'Remember Me' }
        }
    ];
    constructor(private authService: AuthService, private fb: FormBuilder) {}

    ngOnInit() {}

    login() {
        // const data: LoginRequest = Object.assign({}, this.form.value);
        // data.loginCredentials = Object.assign({}, data.loginCredentials);
        console.log(this.form.value);

        // this.authService.login(data);
    }
}
