import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class DataService {
  activeUser: string;
  delivery;
  constructor(private _http: HttpClient) {
    console.log("data service oninit");

  }
   httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type':  'application/json',
      // 'Content-Type':  'application-x-www-form-urlencoded'
      //'Content-Type':  'application/json'
      // 'Authorization': 'my-auth-token'
    })
  };


  // deploy = "http://localhost:3000/pyrodeploy";
  // load = "http://localhost:3000/pyroload";


  deploy = "http://art-app24/portal-iro/api/pyrodeploy";
  load = "http://art-app24/portal-iro/api/pyroload";


  getDelivery() {
    return this._http.get(this.deploy);
  }

  getDispatches() {
    return this._http.get(this.load);
  }

  // urlpostLoaded = "http://localhost:3000/pyroload";
  // urlpostDelivered = "http://localhost:3000/pyrodeploy";

  urlpostLoaded = "http://art-app24/portal-iro/api/pyro/load";
  urlpostDelivered = "http://art-app24/portal-iro/api/pyro/deliver";

  postLoaded(item){
    return this._http.post<any>(this.urlpostLoaded, item, this.httpOptions)
    .pipe(
      // catchError(this.handleError('addHero', hero))
    );
  }
  postDelivered(item){
    return this._http.post<any>(this.urlpostDelivered, item, this.httpOptions)
    .pipe(
      // catchError(this.handleError('addHero', hero))
    );
  }
}
