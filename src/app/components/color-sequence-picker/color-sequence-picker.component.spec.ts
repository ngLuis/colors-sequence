import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSequencePickerComponent } from './color-sequence-picker.component';

describe('ColorSequencePickerComponent', () => {
  let component: ColorSequencePickerComponent;
  let fixture: ComponentFixture<ColorSequencePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorSequencePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSequencePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
