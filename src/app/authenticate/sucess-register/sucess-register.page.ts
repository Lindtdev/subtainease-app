import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { StatusStateComponent } from 'src/app/components/status-state/status-state.component';

@Component({
  selector: 'app-sucess-register',
  templateUrl: './sucess-register.page.html',
  styleUrls: ['./sucess-register.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,StatusStateComponent ]
})
export class SucessRegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
