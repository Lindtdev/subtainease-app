import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-status-state',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './status-state.component.html',
  styleUrls: ['./status-state.component.scss'],
  imports: [CommonModule],
})
export class StatusStateComponent  implements OnInit {

  @Input() title: string = 'Congratulation';
  @Input() message: string = '';
  @Input() imageSrc: string = '../../../assets/success-state.svg';
  @Input() buttonLink: string = '/';
  @Input() buttonText: string = 'OK';
  @Input() isError: boolean = false;
  @Input() errorDetail: string = '';
  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  
  navigate() {
    this.router.navigate([this.buttonLink]);
  }


}
