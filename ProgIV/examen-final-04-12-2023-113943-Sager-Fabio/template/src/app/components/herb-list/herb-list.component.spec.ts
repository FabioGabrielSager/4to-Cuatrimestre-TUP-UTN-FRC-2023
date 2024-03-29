import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbListComponent } from './herb-list.component';

describe('HerbListComponent', () => {
  let component: HerbListComponent;
  let fixture: ComponentFixture<HerbListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerbListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
