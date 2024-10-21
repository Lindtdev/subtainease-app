import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password-email',
  templateUrl: './reset-password-email.page.html',
  styleUrls: ['./reset-password-email.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ResetPasswordEmailPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  redirectToConfirmCode(){
    this.router.navigate(['auth/reset-confirm-email-otp']);

  }

}
