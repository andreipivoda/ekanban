import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  activeUser:string;
  constructor(private _http: HttpClient) {

   }



  getDelivery(){
    return this._http.get("http://localhost:3000/pyrodeploy");
  }
}
