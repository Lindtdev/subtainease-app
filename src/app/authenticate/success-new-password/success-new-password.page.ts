import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { StatusStateComponent } from 'src/app/components/status-state/status-state.component';

@Component({
  selector: 'app-success-new-password',
  templateUrl: './success-new-password.page.html',
  styleUrls: ['./success-new-password.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,StatusStateComponent ]
})
export class SuccessNewPasswordPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
