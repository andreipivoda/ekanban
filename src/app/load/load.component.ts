import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { DataService } from "../data.service";
import { Dispatch } from '../dispatch';
import { interval } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: "app-load",
  templateUrl: "./load.component.html",
  styleUrls: ["./load.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class LoadingComponent implements OnInit {

  sub: Subscription;
  user: String;
  tdata: Dispatch[];
  displayedColumns: string[] = ["line", "reference", "units", "actions"];

  constructor(protected _data: DataService, private router: Router) { }

  ngOnInit() {
    // console.log("dispatches oninit");
    this.user = localStorage.getItem("activeUser");

    this.sub = this._data.getDispatches().subscribe((value: Dispatch[]) => {
      // console.log("this.tdata", this.tdata);
      this.tdata = value;
    });

  }
  sideBarAction(action: string) {
    if (action === "Autentificare") this.router.navigate([""]);
    if (action === "LIVRARE") this.router.navigate(["./todo"]);
    if (action === "INCARCARE") this.router.navigate(["./toget"]);
    if (action === "Setari") this.router.navigate(["./settings"]);
  }

  loaded(dispatch: Dispatch) {
    console.log('loaded!');
    this.tdata = this.tdata.filter((d: Dispatch) => d != dispatch);
    this._data
      .postLoaded(dispatch)
      .subscribe(response => console.log('RESPONSE', response));

  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
    this.sub.unsubscribe();
  }
}
