import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MekitButtonComponent } from 'src/app/components/mekit-button/mekit-button.component';
import { LoaderService } from 'src/services/loader.service';
import { Router } from '@angular/router';
import { StatusStateComponent } from 'src/app/components/status-state/status-state.component';

@Component({
  selector: 'app-liste-details',
  templateUrl: './liste-details.page.html',
  styleUrls: ['./liste-details.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,MekitButtonComponent,StatusStateComponent]
})
export class ListeDetailsPage implements OnInit {

  constructor(private loaderService: LoaderService,private router:Router) { }

  ngOnInit() {
  }

}
