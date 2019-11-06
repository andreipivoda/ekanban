import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css'],
})
export class DeliveryComponent implements OnInit {

  constructor(private _data:DataService,private router: Router) {
    // setInterval(() => { console.log(this.delivery)}, 1000);
  }

  delivery;
  ttype="delivery"
  ngOnInit() {
   this._data.getDelivery().subscribe( data =>{
     this.delivery = data;
   })

  }

  sideBarAction(action){
    if(action === "Autentificare")
      this.router.navigate(['']);
    if(action === "LIVRARE")
      this.router.navigate(['./todo']);
    if(action === "INCARCARE")
      this.router.navigate(['./toget']);
    if(action === "Setari")
      this.router.navigate(['./settings']);
  }


}
