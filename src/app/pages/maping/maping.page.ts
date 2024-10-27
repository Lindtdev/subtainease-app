import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MekitButtonComponent } from 'src/app/components/mekit-button/mekit-button.component';
import { Router } from '@angular/router';
import { StatusStateComponent } from 'src/app/components/status-state/status-state.component';

@Component({
  selector: 'app-maping',
  templateUrl: './maping.page.html',
  styleUrls: ['./maping.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,MekitButtonComponent,StatusStateComponent]
})

export class MapingPage implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

  redirectToListPoints(){
    this.router.navigate(['/app/pack']);
  }
  redirectToDetailsRecy(){
    this.router.navigate(['/app/liste-details']);
  }

}
