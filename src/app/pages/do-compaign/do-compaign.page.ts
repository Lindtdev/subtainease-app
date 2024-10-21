import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-do-compaign',
  templateUrl: './do-compaign.page.html',
  styleUrls: ['./do-compaign.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DoCompaignPage implements OnInit {
  ads: string[] = ['']; // Tableau pour stocker les valeurs des annonces

  constructor() { }

  ngOnInit() {
  }


  addAd() {
    this.ads.push(''); // Ajoute un nouvel élément vide au tableau
  }

  removeAd(index: number) {
    if (this.ads.length > 1) {
      this.ads.splice(index, 1); // Supprime l'élément à l'index donné
    }
  }

  updateAd(index: number, value: string) {
    this.ads[index] = value; // Met à jour la valeur de l'annonce
  }

}
