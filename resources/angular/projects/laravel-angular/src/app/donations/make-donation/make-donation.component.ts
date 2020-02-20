import { Component, OnInit } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';

@Component({
  selector: 'app-make-donation',
  templateUrl: './make-donation.component.html',
  styleUrls: ['./make-donation.component.css']
})
export class MakeDonationComponent implements OnInit {
  model: any = {
    donation: {
      amount: 100,
      currency: 'ugx'
    }
  };
  form: FormGroup = new FormGroup({});
  options: FormlyFormOptions[] = [];
  fields: FormlyFieldConfig[] = [
    {
      key: 'project',
      type: 'select',
      defaultValue: 'ugx',
      templateOptions: {
        label: 'Currency',
        options: [
          { label: 'UGX', value: 'ugx' },
          { label: 'KSh', value: 'ksh' },
          { label: 'USD', value: 'usd' }
        ]
      }
    },
    {
      key: 'amount',
      type: 'input',
      defaultValue: 1000,
      templateOptions: {
        label: 'Amount',
        description: 'Enter the amount you wish to Donate'
      }
    },
    {
      key: 'currency',
      type: 'select',
      defaultValue: 'ugx',
      templateOptions: {
        label: 'Currency',
        options: [
          { label: 'UGX', value: 'ugx' },
          { label: 'KSh', value: 'ksh' },
          { label: 'USD', value: 'usd' }
        ]
      }
    },
    {
      template: `<h5>Billing Info</h5>`
    },
    {
      key: 'p_mtd',
      type: 'select',
      defaultValue: 'mm',
      templateOptions: {
        label: 'Payment Method',
        options: [
          { label: 'Mobile Money', value: 'mm' },
          { label: 'Credit Card', value: 'card' },
          { label: 'Gift Card', value: 'gift' },
          { label: 'Pay Pal', value: 'paypal' },
          { label: 'BitCoin', value: 'bitcoin' },
        ]
      }
    },
    {
      key: 'phone',
      type: 'input',
      templateOptions: {
        label: 'Phone',
        type: 'tel',
        description: 'Phone to be charged'
      }
    },
  ];
  constructor(private  formly: FormlyJsonschema) { }

  ngOnInit() {
  }
  login() { }
}
