import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { StatusStateComponent } from 'src/app/components/status-state/status-state.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listes-recyclages',
  templateUrl: './listes-recyclages.page.html',
  styleUrls: ['./listes-recyclages.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,StatusStateComponent]
})
export class ListesRecyclagesPage implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }
  redirectTohome(){
    this.router.navigate(['/app/home']);
  }

}
