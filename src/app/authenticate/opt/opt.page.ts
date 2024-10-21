import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-opt',
  templateUrl: './opt.page.html',
  styleUrls: ['./opt.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class OptPage implements OnInit {
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
  redirectToConfirmCode(){
    this.router.navigate(['auth/register-sucess']);

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
