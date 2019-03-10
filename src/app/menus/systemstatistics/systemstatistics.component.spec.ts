import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemstatisticsComponent } from './systemstatistics.component';

describe('SystemstatisticsComponent', () => {
  let component: SystemstatisticsComponent;
  let fixture: ComponentFixture<SystemstatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemstatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemstatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
