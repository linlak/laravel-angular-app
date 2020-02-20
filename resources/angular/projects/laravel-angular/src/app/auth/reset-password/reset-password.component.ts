import { Component, OnInit } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
    form = new FormGroup({});
    model: any = {};
    options: FormlyFormOptions = {};
    fields: FormlyFieldConfig[] = [
        {
            key: 'password',
            type: 'input',
            templateOptions: {
                label: 'Password',
                placeholder: 'Enter Password',
                required: true,
                type: 'password',
                description: 'Your Current Password'
            }
        },
        {
            key: 'newpassword',
            type: 'input',
            templateOptions: {
                label: 'New Password',
                placeholder: 'Enter New Password',
                required: true,
                type: 'password',
                description: 'Must be strong and memorable'
            }
        },
        {
            key: 'newpassword_confirmation',
            type: 'input',
            templateOptions: {
                label: 'New Password',
                placeholder: 'Repeat Password',
                required: true,
                type: 'password',
                description: 'Must be the same as above'
            }
        }
    ];
    constructor() {}

    ngOnInit() {}
}
