import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileConComponent } from './profile-con.component';

describe('ProfileConComponent', () => {
  let component: ProfileConComponent;
  let fixture: ComponentFixture<ProfileConComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileConComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
