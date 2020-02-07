import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  sideBarAction(action: string) {
    if (action === 'Autentificare') {
      this.router.navigate(['']);
    }
    if (action === 'LIVRARE') {
      this.router.navigate(['./todo']);
    }
    if (action === 'INCARCARE') {
      this.router.navigate(['./toget']);
    }
    if (action === 'Setari') {
      this.router.navigate(['./settings']);
    }
  }
}
