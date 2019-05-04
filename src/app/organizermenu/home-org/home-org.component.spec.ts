import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOrgComponent } from './home-org.component';

describe('HomeOrgComponent', () => {
  let component: HomeOrgComponent;
  let fixture: ComponentFixture<HomeOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
