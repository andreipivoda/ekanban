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

  getDelivery() {
    return this._http.get("http://localhost:3000/pyrodeploy");
  }

  getDispatches() {
    return this._http.get("http://localhost:3000/pyroload");
  }
}
