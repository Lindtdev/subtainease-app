import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MekitButtonComponent } from 'src/app/components/mekit-button/mekit-button.component';
import { CounterService } from 'src/services/counter.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,MekitButtonComponent],
})
export class Tab3Page {

  totalCount = 20;
  sortedCount = 12;
  unsortedCount = 8;
  scoreCount = 10;

  animatedTotal = 0;
  animatedSorted = 0;
  animatedUnsorted = 0;
  animatedScore = 0;
  constructor(private counterService: CounterService) {}


ngOnInit() {
  this.startCounters();

}


startCounters() {
  this.counterService.startCounter('total', this.totalCount, 2000);
  this.counterService.startCounter('sorted', this.sortedCount, 2000);
  this.counterService.startCounter('unsorted', this.unsortedCount, 2000);
  this.counterService.startCounter('score', this.scoreCount, 2000);

  this.counterService.getCounter('total')?.subscribe(value => {
    this.animatedTotal = value;
  });

  this.counterService.getCounter('sorted')?.subscribe(value => {
    this.animatedSorted = value;
  });

  this.counterService.getCounter('unsorted')?.subscribe(value => {
    this.animatedUnsorted = value;
  });

  this.counterService.getCounter('score')?.subscribe(value => {
    this.animatedScore = value;
  });
}
}