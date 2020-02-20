import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDonationsPageComponent } from './my-donations-page.component';

describe('MyDonationsPageComponent', () => {
  let component: MyDonationsPageComponent;
  let fixture: ComponentFixture<MyDonationsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDonationsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDonationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
