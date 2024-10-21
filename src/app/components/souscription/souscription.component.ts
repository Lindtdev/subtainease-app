import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-souscription',
  templateUrl: './souscription.component.html',
  styleUrls: ['./souscription.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
})
export class SouscriptionComponent  implements OnInit {
  @Input() borderClass: string = ''; 
  @Input() title: string = ''; 
  @Input() price: string = ''; 
  @Input() details: string[] = []; 
  constructor(private router: Router) { }

  ngOnInit() {}

  navigateToPayment() {
    this.router.navigate(['/app/pay-pack/'], { queryParams: { name: this.title, price: this.price } });
  }

}



