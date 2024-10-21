import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccessNewPasswordPage } from './success-new-password.page';

describe('SuccessNewPasswordPage', () => {
  let component: SuccessNewPasswordPage;
  let fixture: ComponentFixture<SuccessNewPasswordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessNewPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
