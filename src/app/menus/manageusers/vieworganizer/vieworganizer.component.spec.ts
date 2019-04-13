import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworganizerComponent } from './vieworganizer.component';

describe('VieworganizerComponent', () => {
  let component: VieworganizerComponent;
  let fixture: ComponentFixture<VieworganizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieworganizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieworganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
