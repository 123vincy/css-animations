import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHoverEffectsComponent } from './menu-hover-effects.component';

describe('MenuHoverEffectsComponent', () => {
  let component: MenuHoverEffectsComponent;
  let fixture: ComponentFixture<MenuHoverEffectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuHoverEffectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHoverEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
