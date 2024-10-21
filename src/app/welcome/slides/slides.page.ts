import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCheckbox } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { LoaderService } from 'src/services/loader.service';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonCheckbox, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SlidesPage implements OnInit {

  constructor(
    private router: Router,
    private loaderService: LoaderService) { }
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;

 
  ngOnInit() {
  }

  logActiveIndex() {
    console.log(this.swiperRef?.nativeElement.swiper.activeIndex);
  }

  showLoader() {
    this.loaderService.presentLoading('Loading...');
    this.loaderService.dismissLoading();
  }
  redirectToWelcome(){
    this.router.navigate(['/welcome']);
  }
 

}
