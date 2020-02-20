import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-donations-page',
  templateUrl: './my-donations-page.component.html',
  styleUrls: ['./my-donations-page.component.sass']
})
export class MyDonationsPageComponent implements OnInit {
  Title = 'My Donations';
  constructor() { }

  ngOnInit() {
  }

}
