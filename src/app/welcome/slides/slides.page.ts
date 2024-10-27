import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, NO_ERRORS_SCHEMA, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCheckbox } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { LoaderService } from 'src/services/loader.service';
import { register } from 'swiper/element/bundle';
register();
// import { Carousel } from 'carousel-js'; 

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  imports: [IonCheckbox, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SlidesPage implements OnInit {
  // carousel!: Carousel; 
  constructor(
    private router: Router,
    private loaderService: LoaderService) { }
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  slides = [
    { image: 'url1.jpg', title: 'Slide 1' },
    { image: 'url2.jpg', title: 'Slide 2' },
    { image: 'url2.jpg', title: 'Slide 3' },
    // Ajoutez d'autres slides ici
  ];
 
  ngOnInit() {
    // this.carousel = new Carousel('.carousel', {
    //   loop: true,
    //   autoplay: true,
    //   interval: 3000,
    // });
  }

  logActiveIndex() {
    console.log(this.swiperRef?.nativeElement.swiper.activeIndex);
  }

  showLoader() {
    this.loaderService.presentLoading('Loading...');

  }
  redirectToWelcome(){
    this.router.navigate(['/welcome']);
  }
 

}
