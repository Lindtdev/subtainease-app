import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MekitButtonComponent } from 'src/app/components/mekit-button/mekit-button.component';
import { GoogleMap, CapacitorGoogleMaps } from '@capacitor-community/google-maps';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,MekitButtonComponent],
})
export class Tab1Page {
  constructor(private router:Router) {}
  map?: GoogleMap;

  // async ngOnInit() {
  //   this.map = await CapacitorGoogleMaps.create({
  //     id: 'my-map',
  //     element: document.getElementById('map_canvas'),
  //     config: {
  //       center: {
  //         lat: 37.422,
  //         lng: -122.084,
  //       },
  //       zoom: 15,
  //     },
  //   });
  // }

  redirectToSouscription(){
    this.router.navigate(['/app/pack']);
  }
}
