import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loading: any;
  constructor(private loadingController: LoadingController) {}

  // async presentLoading(message: string = 'Loading...', duration: number = 3000) {
  //   const loading = await this.loadingController.create({
  //     message: message,
  //     duration: duration,
  //     spinner: 'circles',
  //   });
  //   await loading.present();
  // }

  async presentLoading(message: string = 'Loading...') {
    this.loading = await this.loadingController.create({
      message: message,
      spinner: 'circles', // Utilisez le spinner que vous préférez
      backdropDismiss: false, // Empêche de fermer le loader en cliquant en dehors
    });
    await this.loading.present();
  }

  async dismissLoading() {
    if (this.loading) {
      await this.loading.dismiss();
      this.loading = null; // Réinitialiser la variable
    }
  }
}
