import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrerPageComponent } from './carrer-page.component';

describe('CarrerPageComponent', () => {
  let component: CarrerPageComponent;
  let fixture: ComponentFixture<CarrerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
