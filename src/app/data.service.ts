import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dispatch } from './dispatch';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  activeUser: string;
  // delivery;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Content-Type':  'application-x-www-form-urlencoded'
      // 'Content-Type':  'application/json'
      // 'Authorization': 'my-auth-token'
    })
  };

  // deploy = 'http://localhost:3000/pyrodeploy';
  // load = 'http://localhost:3000/pyroload';
  // urlpostLoaded = 'http://localhost:3000/pyroload';
  // urlpostDelivered = 'http://localhost:3000/pyrodeploy';


  deploy = 'http://art-app24/portal-iro/api/pyrodeploy';
  load = 'http://art-app24/portal-iro/api/pyroload';
  urlpostLoaded = 'http://art-app24/portal-iro/api/pyro/load';
  urlpostDelivered = 'http://art-app24/portal-iro/api/pyro/deliver';


  constructor(private _http: HttpClient) {
    // console.log('data service oninit');
    this.activeUser = localStorage.getItem('activeUser');
  }

  getDelivery() {
    return this._http.get(this.deploy);
  }

  getDispatches() {
    return this._http.get(this.load);
  }


  postLoaded(item: Dispatch) {
    return this._http.post<Dispatch>(this.urlpostLoaded, item, this.httpOptions);
  }
  postDelivered(item: Dispatch) {
    item.resource = this.activeUser;
    return this._http.post<Dispatch>(this.urlpostDelivered, item, this.httpOptions);
  }
}
