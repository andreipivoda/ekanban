import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Dispatch } from '../dispatch';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeliveryComponent implements OnInit, OnDestroy {

  viewport = 'large';
  user: string;
  sub: Subscription;
  tdata: Dispatch[];
  displayedColumns: string[] = ['line', 'reference', 'units', 'actions'];
  interval = setInterval(() => {
    this.subDelivery();
  }, 30000);

  constructor(
    public data: DataService,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    // console.log('constructor DeliveryComponent');
    // breakpointObserver
    //   .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
    //   .subscribe(result => {
    //     if (result.matches) {
    //       // console.log('match',result.matches,result)
    //       this.viewport = 'small';
    //     }
    //   });
  }
  ngOnInit() {
    // console.log('ngOnInit DeliveryComponent');
    // console.log('delivery oninit');
    this.user = localStorage.getItem('activeUser');
    this.subDelivery();
    // console.log('this.viewport', this.viewport);
  }

  subDelivery() {
    this.sub = this.data.getDelivery().subscribe((value: Dispatch[]) => {
      this.tdata = value;
    });
  }



  sideBarAction(action: string) {
    if (action === 'Autentificare') {
      this.router.navigate(['']);
    } else if (action === 'LIVRARE') {
      this.router.navigate(['./todo']);
    } else if (action === 'INCARCARE') {
      this.router.navigate(['./toget']);
    } else if (action === 'Setari') {
      this.router.navigate(['./settings']);
    }
  }

  delivered(dispatch: Dispatch) {
    this.tdata = this.tdata.filter(disp => disp !== dispatch);
    this.data
      .postDelivered(dispatch)
      .subscribe();

  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.sub.unsubscribe();
    clearInterval(this.interval);
  }
}
