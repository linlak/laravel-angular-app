import { Component, OnInit } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-reset-password-confirm',
    templateUrl: './reset-password-confirm.component.html',
    styleUrls: ['./reset-password-confirm.component.scss']
})
export class ResetPasswordConfirmComponent implements OnInit {
    form = new FormGroup({});
    model: any = {};
    options: FormlyFormOptions = {};
    fields: FormlyFieldConfig[] = [
        {
            key: 'password',
            type: 'input',
            templateOptions: {
                label: 'New Password',
                placeholder: 'Enter Password',
                required: true,
                type: 'password',
                description: 'Must be strong and memorable'
            }
        },
        {
            key: 'password_confirmation',
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
