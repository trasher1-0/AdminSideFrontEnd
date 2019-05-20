import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetContComponent } from './forget-cont.component';

describe('ForgetContComponent', () => {
  let component: ForgetContComponent;
  let fixture: ComponentFixture<ForgetContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
