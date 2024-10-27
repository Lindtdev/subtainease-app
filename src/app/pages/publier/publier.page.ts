import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { LoaderService } from 'src/services/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publier',
  templateUrl: './publier.page.html',
  styleUrls: ['./publier.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PublierPage implements OnInit {
  selectedImage: string | ArrayBuffer | null = null;
  constructor(private loaderService: LoaderService,private router:Router) { }

  ngOnInit() {
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result; // Stocke l'image pour l'afficher
      };
      reader.readAsDataURL(file);
    }
  }

  showLoader() {
    this.loaderService.presentLoading('Loading...').then(() => {
      this.router.navigate(['/app/liste-details']);
    });
   
  }

}
