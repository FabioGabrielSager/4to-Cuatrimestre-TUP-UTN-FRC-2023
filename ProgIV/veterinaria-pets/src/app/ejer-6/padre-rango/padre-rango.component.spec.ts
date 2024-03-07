import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreRangoComponent } from './padre-rango.component';

describe('PadreRangoComponent', () => {
  let component: PadreRangoComponent;
  let fixture: ComponentFixture<PadreRangoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PadreRangoComponent]
    });
    fixture = TestBed.createComponent(PadreRangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
