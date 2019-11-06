import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(private _data:DataService,private router: Router) { }

  ngOnInit() {
  }

  setUser(user){
    if(user !== undefined)
      this._data = user;
    else this._data = 'user error'
    console.log('user:',user)
    this.router.navigate(['./toget']);
  }
}