import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MekitButtonComponent } from 'src/app/components/mekit-button/mekit-button.component';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true, 
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,MekitButtonComponent]
})
export class Tab4Page implements OnInit {
  activeSlot: string = 'About'; // Slot actif par défaut

  // Méthode pour changer le slot actif
 
  constructor() { }

  ngOnInit() {
  }

  setActiveSlot(slot: string) {
    this.activeSlot = slot;
  }

   // Méthode pour obtenir le contenu en fonction du slot actif
   getContent() {
    switch (this.activeSlot) {
      case 'About':
        return 'Mekit is a mobile digital solution that offers the possibility, with over 90% viability, of transforming your prospects into your future customers through the power of recommendation, and of gaining profits from product and goods recommendations.';
      case 'Publicités':
        return 'Make Pub your prospects into your future customers through the power of recommendation, and of gaining profits from product and goods recommendations.';
      case 'Statistiques':
        return 'Make statistique through the power of recommendation, and of gaining profits from product and goods recommendations.';
      default:
        return '';
    }
  }

}
