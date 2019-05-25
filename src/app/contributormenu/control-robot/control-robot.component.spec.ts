import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlRobotComponent } from './control-robot.component';

describe('ControlRobotComponent', () => {
  let component: ControlRobotComponent;
  let fixture: ComponentFixture<ControlRobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlRobotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
