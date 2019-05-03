import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContloginComponent } from './contlogin.component';

describe('ContloginComponent', () => {
  let component: ContloginComponent;
  let fixture: ComponentFixture<ContloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
