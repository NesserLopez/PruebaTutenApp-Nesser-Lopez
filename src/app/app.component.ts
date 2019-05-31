import { Component } from '@angular/core';

import { Platform, MenuController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private alertCtrl: AlertController,
    private statusBar: StatusBar,
    private router: Router,
    private menu: MenuController
  ) {

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  open_page(page: string) {
    this.router.navigate([page]);
    this.menu.close();
  }

  async seguro_cerrar_sesion() {
    let alert = await this.alertCtrl.create({
      header: "¡Atención!",
      message: "¿Desea cerrar sesión?",
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.cerrar_sesion();
          }
        }
      ]
    })
    await alert.present();
  }

  cerrar_sesion() {
    this.router.navigate(['login']);
    this.menu.close();
  }
}
