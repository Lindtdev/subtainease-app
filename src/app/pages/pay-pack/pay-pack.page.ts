import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCheckbox } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-pack',
  templateUrl: './pay-pack.page.html',
  styleUrls: ['./pay-pack.page.scss'],
  standalone: true,
  imports: [IonCheckbox, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PayPackPage implements OnInit {

  selectedPaymentMethod: string='';

  constructor(private router: Router) {}

  ngOnInit() {
  }
  onPaymentMethodChange(method: string) {
    this.selectedPaymentMethod = method;
    this.router.navigate(['/app/validation-pay'], { queryParams: { method: this.selectedPaymentMethod } });
  }

}
