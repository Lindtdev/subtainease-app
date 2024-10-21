import { Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { VerifyOptPage } from './verify-opt/verify-opt.page';
import { OptPage } from './opt/opt.page';
import { SucessRegisterPage } from './sucess-register/sucess-register.page';
import { SignUpPage } from './sign-up/sign-up.page';
import { ResetPasswordEmailPage } from './reset-password-email/reset-password-email.page';
import { ResetConfirmEmailOtpPage } from './reset-confirm-email-otp/reset-confirm-email-otp.page';
import { NewPasswordPage } from './new-password/new-password.page';
import { SuccessNewPasswordPage } from './success-new-password/success-new-password.page';


export const routes: Routes = [

  {
    path: 'login',
    component:LoginPage,
  },
  {
    path: 'sign-up',
    component: SignUpPage,
  },
  {
    path: 'account-verification',
    component: VerifyOptPage,
  },
  {
    path: 'confirm-code',
    component: OptPage,
  },
  {
    path: 'register-sucess',
    component: SucessRegisterPage,
  },
  {
    path: 'reset-password-email',
    component: ResetPasswordEmailPage,
  },
  {
    path: 'reset-confirm-email-otp',
    component: ResetConfirmEmailOtpPage,
  },
  {
    path: 'new-password',
    component: NewPasswordPage,
  },
  {
    path: 'success-new-password',
    component: SuccessNewPasswordPage,
  },
  
];

