import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput } from '@ionic/angular/standalone';
import { SouscriptionComponent } from 'src/app/components/souscription/souscription.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonInput, IonButton, IonHeader, IonToolbar, IonTitle, IonContent,SouscriptionComponent]
})
export class Tab2Page {

  constructor() {}

}
