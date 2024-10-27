import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loading: any;
  constructor(private loadingController: LoadingController) {}

  async presentLoading(message: string): Promise<void> {
    this.loading = await this.loadingController.create({
      message: message,
      duration: 2000, // Durée de l'animation
    });
    await this.loading.present();
    return new Promise((resolve) => {
      setTimeout(() => {
        this.loading.dismiss();
        resolve();
      }, 2000); // Correspond à la durée de l'animation
    });
  }

  // async presentLoading(message: string = 'Loading...') {
  //   this.loading = await this.loadingController.create({
  //     message: message,
  //     spinner: 'circles', 
  //     backdropDismiss: false,
  //   });
  //   await this.loading.present();
  // }

  // async dismissLoading() {
  //   if (this.loading) {
  //     await this.loading.dismiss();
  //     this.loading = null; 
  //   }
  // }
}
