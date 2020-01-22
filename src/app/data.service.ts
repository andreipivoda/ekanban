import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  activeUser: string;
  delivery;
  constructor(private _http: HttpClient) {
    console.log("data service oninit");

  }


  // deploy = "http://localhost:3000/pyrodeploy";
  // load = "http://localhost:3000/pyrodeploy";

  deploy = "http://art-app24/portal-iro/api/pyrodeploy";
  load = "http://art-app24/portal-iro/api/pyroload";


  getDelivery() {
    return this._http.get(this.deploy);
  }

  getDispatches() {
    return this._http.get(this.load);
  }
}
