import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraCargaComponent } from './barra-carga.component';

describe('BarraCargaComponent', () => {
  let component: BarraCargaComponent;
  let fixture: ComponentFixture<BarraCargaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarraCargaComponent]
    });
    fixture = TestBed.createComponent(BarraCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
