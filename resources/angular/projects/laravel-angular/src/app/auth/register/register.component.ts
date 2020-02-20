import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Enter fullname',
        required: true,
        description: 'e.g (Firstname Lastname)'
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email',
        placeholder: 'Enter your email address',
        type: 'email',
        required: true,
        description: 'e.g (Johndoe@example.com)'
      },
    },
    {
      key: 'userName',
      type: 'input',
      templateOptions: {
        label: 'Username',
        placeholder: 'Username',
        required: true,
        description: 'You will need it to login'
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        label: 'Password',
        type: 'password',
        placeholder: 'Enter your password',
        description: 'Never share your password',
        required: true,
      }
    },
    {
      key: 'password_confirmation',
      type: 'input',
      templateOptions: {
        label: 'Confirm Password',
        type: 'password',
        placeholder: 'Repeat your password',
        description: 'Must be the same as above!',
        required: true,
      },
      hideExpression: '!model.password'
    },
    {
      key: 'remember',
      type: 'checkbox',
      defaultValue: true,
      templateOptions: {
         label: 'Accept Terms',
         required: true
         },
    },
  ];
  constructor() { }

  ngOnInit() {
  }
  register() {}
}
