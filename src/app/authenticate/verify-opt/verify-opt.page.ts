import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-opt',
  templateUrl: './verify-opt.page.html',
  styleUrls: ['./verify-opt.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class VerifyOptPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  redirectToConfirmCode(){
    this.router.navigate(['auth/confirm-code']);

  }

 


}
