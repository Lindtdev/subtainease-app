import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCheckbox, IonButton, IonInput } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/services/loader.service';

@Component({
  selector: 'app-validation-pay',
  templateUrl: './validation-pay.page.html',
  styleUrls: ['./validation-pay.page.scss'],
  standalone: true,
  imports: [IonInput, IonButton, IonCheckbox, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ValidationPayPage implements OnInit {
  paymentMethod!: string;
  paymentImage!: string;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private loaderService: LoaderService
  ) {}

  ngOnInit() {
    // Récupérer le paramètre de la route
    this.route.queryParams.subscribe(params => {
      this.paymentMethod = params['method'];
      this.setPaymentImage();
    });
  }

  setPaymentImage() {
    if (this.paymentMethod === 'MOMO') {
      this.paymentImage = '../../../assets/MoMo.svg';
    } else if (this.paymentMethod === 'OM') {
      this.paymentImage = '../../../assets/OM.svg';
    }
  }

  redirectToSuccessPay(){
   
      this.loaderService.presentLoading('Loading...').then(() => {
        this.router.navigate(['/app/maping']);
      });
    }
    
  }


