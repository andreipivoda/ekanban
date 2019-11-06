import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  activeUser:string;
  constructor(private _http: HttpClient) {

   }

  //  this.apiService.getNews().subscribe((data)=>{
  //   console.log(data);
  //   this.articles = data['articles'];
  // });

  getDelivery(){
    return this._http.get("http://localhost:3000/pyrodeploy");
  }
}
