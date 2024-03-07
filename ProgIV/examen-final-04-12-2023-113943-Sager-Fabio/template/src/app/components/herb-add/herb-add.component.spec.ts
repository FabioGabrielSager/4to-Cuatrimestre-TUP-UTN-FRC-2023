import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbAddComponent } from './herb-add.component';

describe('HerbAddComponent', () => {
  let component: HerbAddComponent;
  let fixture: ComponentFixture<HerbAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerbAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerbAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
