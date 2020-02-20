import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsPageComponent } from './donations-page.component';

describe('DonationsPageComponent', () => {
  let component: DonationsPageComponent;
  let fixture: ComponentFixture<DonationsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
