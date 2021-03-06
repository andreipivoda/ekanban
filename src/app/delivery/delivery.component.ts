import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
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
  tdata: Dispatch[] = [];
  displayedColumns: string[] = ['line', 'reference', 'units', 'actions'];

  interval = setInterval(() => {
    this.subDelivery();
  }, 30000);

  constructor(
    public data: DataService,
    private router: Router
  ) {

  }
  ngOnInit() {
    this.user = localStorage.getItem('activeUser');
    this.subDelivery();
  }

  subDelivery() {
    this.sub = this.data.getDelivery().subscribe((value: Dispatch[]) => {
      this.tdata = value.filter(dispatch => dispatch.resource === this.user);
      console.log('this.tdata.length', this.tdata.length);
      if (this.tdata.length === 0) {
        this.router.navigate(['./toget']);
      }

    });
  }





  delivered(dispatch: Dispatch) {
    this.tdata = this.tdata.filter(disp => disp !== dispatch);
    this.data.postDelivered(dispatch).subscribe();
    if (this.tdata.length === 0) {
      this.router.navigate(['./toget']);
    }


  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    clearInterval(this.interval);
  }
}
