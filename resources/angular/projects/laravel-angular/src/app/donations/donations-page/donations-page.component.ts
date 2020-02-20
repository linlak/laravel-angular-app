import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donations-page',
  templateUrl: './donations-page.component.html',
  styleUrls: ['./donations-page.component.sass']
})
export class DonationsPageComponent implements OnInit {
  Title = 'Donations';
  constructor() { }

  ngOnInit() {
  }

}
