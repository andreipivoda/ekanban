import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { Dispatch } from '../dispatch';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoadingComponent implements OnInit, OnDestroy {

  sub: Subscription;
  user: string;
  tdata: Dispatch[];
  displayedColumns: string[] = ['line', 'reference', 'units', 'actions'];

  interval = setInterval(() => {
    this.subDispatches();
  }, 30000);

  constructor(private Data: DataService, private router: Router) { }

  ngOnInit() {
    this.user = localStorage.getItem('activeUser');
    this.subDispatches();

  }

  subDispatches() {
    this.sub = this.Data.getDispatches().subscribe((value: Dispatch[]) => {
      this.tdata = value;
    });
  }





  loaded(dispatch: Dispatch) {
    this.tdata = this.tdata.filter(disp => disp !== dispatch);
    this.Data.postLoaded(dispatch).subscribe();
    console.log('this.tdata.length', this.tdata.length);
    if (this.tdata.length === 0) {
      this.router.navigate(['./todo']);
    }


  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    clearInterval(this.interval);
  }
}
