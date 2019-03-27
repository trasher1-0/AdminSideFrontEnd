import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorganizerComponent } from './editorganizer.component';

describe('EditorganizerComponent', () => {
  let component: EditorganizerComponent;
  let fixture: ComponentFixture<EditorganizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorganizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
