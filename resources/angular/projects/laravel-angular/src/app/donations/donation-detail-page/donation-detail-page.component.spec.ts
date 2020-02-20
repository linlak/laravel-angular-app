import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationDetailPageComponent } from './donation-detail-page.component';

describe('DonationDetailPageComponent', () => {
  let component: DonationDetailPageComponent;
  let fixture: ComponentFixture<DonationDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
