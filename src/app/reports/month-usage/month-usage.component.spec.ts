import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthUsageComponent } from './month-usage.component';

describe('MonthUsageComponent', () => {
  let component: MonthUsageComponent;
  let fixture: ComponentFixture<MonthUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
