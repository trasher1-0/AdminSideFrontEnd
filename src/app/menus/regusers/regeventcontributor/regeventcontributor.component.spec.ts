import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegeventcontributorComponent } from './regeventcontributor.component';

describe('RegeventcontributorComponent', () => {
  let component: RegeventcontributorComponent;
  let fixture: ComponentFixture<RegeventcontributorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegeventcontributorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegeventcontributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
