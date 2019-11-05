import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeliveryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  sideBarAction(action){
    if(action === "Autentificare")
      this.router.navigate(['']);
    if(action === "LIVRARE")
      this.router.navigate(['./todo']);
    if(action === "INCARCARE")
      this.router.navigate(['./toget']);
  }

}
