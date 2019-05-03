import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConComponent } from './home-con.component';

describe('HomeConComponent', () => {
  let component: HomeConComponent;
  let fixture: ComponentFixture<HomeConComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeConComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
