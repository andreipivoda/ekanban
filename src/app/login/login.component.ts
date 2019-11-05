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
    if(user.innerText !== undefined)
      this._data = user.innerText;
    else this._data = 'errorUser'
    console.log('user:',user.innerText)
    this.router.navigate(['./toget']);
  }
}
