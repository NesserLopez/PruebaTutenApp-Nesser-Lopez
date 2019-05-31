import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = environment.url;
  private httpOptions: any;
  private httpOptions_b: any;
  constructor(
    public http: HttpClient
  ) {
  }


  put(endpoint: string, email: string, password: string) {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'password': password,
        'app': 'APP_BCK'
      })
    };
    //return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    return this.http.put<any>(this.url + endpoint, {
      email: email
    }, this.httpOptions);
  }

  public email: any;
  public token: any;
  get(endpoint: string) {
    this.email = localStorage.getItem('email');
    this.token = localStorage.getItem('token');

    this.httpOptions_b = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'adminemail': this.email,
        'token': this.token,
        'app': 'APP_BCK'
      })
    };

    return this.http.get<any>(this.url + endpoint, this.httpOptions_b);
  }

}
