import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsstransformsComponent } from './csstransforms.component';

describe('CsstransformsComponent', () => {
  let component: CsstransformsComponent;
  let fixture: ComponentFixture<CsstransformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsstransformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsstransformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
