import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidationPayPage } from './validation-pay.page';

describe('ValidationPayPage', () => {
  let component: ValidationPayPage;
  let fixture: ComponentFixture<ValidationPayPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationPayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
