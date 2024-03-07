import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiAutoComponent } from './mi-auto.component';

describe('MiAutoComponent', () => {
  let component: MiAutoComponent;
  let fixture: ComponentFixture<MiAutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiAutoComponent]
    });
    fixture = TestBed.createComponent(MiAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
