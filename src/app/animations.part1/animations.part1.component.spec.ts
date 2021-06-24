import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animations.Part1Component } from './animations.part1.component';

describe('Animations.Part1Component', () => {
  let component: Animations.Part1Component;
  let fixture: ComponentFixture<Animations.Part1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Animations.Part1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Animations.Part1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
