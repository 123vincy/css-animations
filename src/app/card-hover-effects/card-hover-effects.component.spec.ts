import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHoverEffectsComponent } from './card-hover-effects.component';

describe('CardHoverEffectsComponent', () => {
  let component: CardHoverEffectsComponent;
  let fixture: ComponentFixture<CardHoverEffectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHoverEffectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHoverEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
