import { Component, inject } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components-module';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: true,
  imports: [IonicModule, ComponentsModule],
})
export class AlertPage {
  private alertCtrl = inject(AlertController);


  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['Cancel', 'Open Modal', 'Delete'],
    });
    await alert.present();
  }
}



