import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesuccessComponent } from './invoicesuccess.component';

describe('InvoicesuccessComponent', () => {
  let component: InvoicesuccessComponent;
  let fixture: ComponentFixture<InvoicesuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
