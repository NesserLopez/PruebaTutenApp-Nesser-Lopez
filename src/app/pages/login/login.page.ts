import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

import { LoadingController, Platform, AlertController } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loading: any;
  alert: any;
  constructor(
    private _us: UserService,
    private router: Router,
    public loadingController: LoadingController,
    public platform: Platform,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  user: string;
  password: string;
  token: string;
  validateLogin: boolean = false;
  login() {

    this.present_loading('Iniciando sesión');
  
    this._us.put('testapis%40tuten.cl', this.user, this.password)
      .subscribe(
        (response: any) => {
          //const array = response; 
          console.log(response);
          localStorage.setItem("token",  (response['sessionTokenBck']+''));
          localStorage.setItem("email", this.user);

          this.router.navigate(['home']);
          this.validateLogin = false;

          setTimeout(() => {
            this.loading.dismiss();
          }, 1000);
        },
        (error: any) => {
          this.loading.dismiss();
          this.present_alert("Atención", error.message);
          this.validateLogin = false;
          console.log(error);
        }
      );
  }

  async present_loading(message: string) {
    this.loading = await this.loadingController.create({
      message
    });

    return this.loading.present();
  }

  async present_alert(header: string, message: string) {
    this.alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: [
        {
          text: 'ok'
        }
      ]
    });

    return this.alert.present();
  }

}
