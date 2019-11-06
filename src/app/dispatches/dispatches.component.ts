import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dispatches',
  templateUrl: './dispatches.component.html',
  styleUrls: ['./dispatches.component.css']
})
export class DispatchesComponent implements OnInit {

  ttype="dispatches"
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
    if(action === "Setari")
      this.router.navigate(['./settings']);
  }

}
