import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetPasswordEmailPage } from './reset-password-email.page';

describe('ResetPasswordEmailPage', () => {
  let component: ResetPasswordEmailPage;
  let fixture: ComponentFixture<ResetPasswordEmailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
