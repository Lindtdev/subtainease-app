import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { MekitButtonComponent } from 'src/app/components/mekit-button/mekit-button.component';

@Component({
  selector: 'app-become-publisher',
  templateUrl: './become-publisher.page.html',
  styleUrls: ['./become-publisher.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonItem, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,MekitButtonComponent]
})
export class BecomePublisherPage implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

  register(){
    this.router.navigate(['app/home']);

  }
}
