import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageHoverEffectsComponent } from './image-hover-effects.component';

describe('ImageHoverEffectsComponent', () => {
  let component: ImageHoverEffectsComponent;
  let fixture: ComponentFixture<ImageHoverEffectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageHoverEffectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageHoverEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
