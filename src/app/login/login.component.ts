import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Dispatch } from '../dispatch';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  sub: Subscription;
  user: string;
  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.user = localStorage.getItem('activeUser');
  }

  setUser(user: string) {
    if (user !== undefined) {
      this.data.activeUser = user;
    } else {
      this.data.activeUser = 'user error';
    }
    localStorage.setItem('activeUser', user);
    let tdata = [];
    this.sub = this.data.getDelivery().subscribe((value: Dispatch[]) => {
      tdata = value.filter(dispatch => dispatch.resource === user);
      tdata.length > 0 ? this.router.navigate(['./todo']) : this.router.navigate(['./toget']);

    });

  }

  getActive(itm) {
    return itm === this.user ? 'active' : null;
  }
}
