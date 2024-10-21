import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenu',
  templateUrl: './bienvenu.page.html',
  styleUrls: ['./bienvenu.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BienvenuPage implements OnInit {

  constructor( private router: Router,) { }

  ngOnInit() {
  }
  redirectToLogin(){
    this.router.navigate(['/auth/login']);
  }
}
