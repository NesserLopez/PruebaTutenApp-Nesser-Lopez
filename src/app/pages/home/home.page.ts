import { Component, OnInit } from '@angular/core';

import { LoadingController, Platform, AlertController } from '@ionic/angular';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  bookings = [];
  searchText = '';
  constructor(
    private _us: UserService
  ) { }


  ngOnInit() {


    this._us.get(`contacto%40tuten.cl/bookings?current=true`)
      .subscribe(
        res => {
          this.bookings = <any>res;
          console.log(res);
        },
      );
  }

  buscar(event) {
    //console.log(event);
    this.searchText = event.detail.value;
  }
}
