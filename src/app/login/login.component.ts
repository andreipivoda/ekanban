import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
  }

  setUser(user) {
    if (user !== undefined) {
      this.data.activeUser = user;
    } else {
      this.data.activeUser = 'user error';
    }
    localStorage.setItem('activeUser', user);
    console.log('user:', user);
    this.router.navigate(['./toget']);
  }
}
