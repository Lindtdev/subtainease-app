import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonIcon, IonInput, IonLabel, IonCheckbox } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { eye, lockClosed } from 'ionicons/icons';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [ RouterModule,IonCheckbox, IonLabel, IonInput, IonIcon, IonItem, IonList, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  
  constructor(
    private router: Router
  ) {
    addIcons({ eye, lockClosed });
    
   }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['app/home']);

  }

}
