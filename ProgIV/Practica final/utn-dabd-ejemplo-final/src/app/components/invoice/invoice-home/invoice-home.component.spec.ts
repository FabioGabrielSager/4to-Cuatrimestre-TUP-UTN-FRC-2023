import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceHomeComponent } from './invoice-home.component';

describe('InvoiceHomeComponent', () => {
  let component: InvoiceHomeComponent;
  let fixture: ComponentFixture<InvoiceHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceHomeComponent]
    });
    fixture = TestBed.createComponent(InvoiceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
