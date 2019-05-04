import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecontributorComponent } from './managecontributor.component';

describe('ManagecontributorComponent', () => {
  let component: ManagecontributorComponent;
  let fixture: ComponentFixture<ManagecontributorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagecontributorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecontributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
