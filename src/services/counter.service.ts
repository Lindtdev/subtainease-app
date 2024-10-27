// counter.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private counterSubjects: { [key: string]: Subject<number> } = {};

  startCounter(key: string, target: number, duration: number) {
    let start = 0;
    const increment = target / (duration / 100); // Calculer l'incrément
    this.counterSubjects[key] = new Subject<number>();

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      this.counterSubjects[key].next(Math.floor(start)); // Émettre la valeur arrondie
    }, 100);
  }

  getCounter(key: string) {
    return this.counterSubjects[key]?.asObservable();
  }
}


