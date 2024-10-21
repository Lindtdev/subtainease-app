import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetConfirmEmailOtpPage } from './reset-confirm-email-otp.page';

describe('ResetConfirmEmailOtpPage', () => {
  let component: ResetConfirmEmailOtpPage;
  let fixture: ComponentFixture<ResetConfirmEmailOtpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetConfirmEmailOtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
