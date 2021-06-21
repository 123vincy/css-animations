import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonHoverEffectsComponent } from './button-hover-effects.component';

describe('ButtonHoverEffectsComponent', () => {
  let component: ButtonHoverEffectsComponent;
  let fixture: ComponentFixture<ButtonHoverEffectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonHoverEffectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonHoverEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
