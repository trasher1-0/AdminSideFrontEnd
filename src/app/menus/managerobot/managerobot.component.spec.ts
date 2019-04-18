import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerobotComponent } from './managerobot.component';

describe('ManagerobotComponent', () => {
  let component: ManagerobotComponent;
  let fixture: ComponentFixture<ManagerobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerobotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
