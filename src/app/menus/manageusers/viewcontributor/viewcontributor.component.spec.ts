import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcontributorComponent } from './viewcontributor.component';

describe('ViewcontributorComponent', () => {
  let component: ViewcontributorComponent;
  let fixture: ComponentFixture<ViewcontributorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcontributorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcontributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
