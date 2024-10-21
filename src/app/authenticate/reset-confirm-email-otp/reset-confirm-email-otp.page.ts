import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-reset-confirm-email-otp',
  templateUrl: './reset-confirm-email-otp.page.html',
  styleUrls: ['./reset-confirm-email-otp.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ResetConfirmEmailOtpPage implements OnInit {
  timer: number = 30;
  timerSubscription: Subscription;
  constructor(
    private router: Router
  ) { 
    this.timerSubscription = new Subscription();
  }

  ngOnInit() {
    this.startTimer() 
  }
  redirectToNewPass(){
    this.router.navigate(['auth/new-password']);

  }

  startTimer() {
    this.timerSubscription = interval(1000).subscribe(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        this.timerSubscription.unsubscribe();
      }
    });
  }
}
