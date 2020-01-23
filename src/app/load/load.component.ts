import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { DataService } from "../data.service";
import { Dispatch } from '../dispatch';

@Component({
  selector: "app-load",
  templateUrl: "./load.component.html",
  styleUrls: ["./load.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class LoadingComponent implements OnInit {

  sub: Subscription;
  user: String;
  tdata:any;
  displayedColumns: string[] = ["line", "reference", "units", "actions"];

  constructor(protected _data: DataService, private router: Router) { }

  ngOnInit() {
    console.log("dispatches oninit");
    this.user = localStorage.getItem("activeUser");
    this.sub = this._data.getDispatches().subscribe((value:Dispatch) => {
      console.log("this.tdata",this.tdata);
      this.tdata = value;
    });
  }
  sideBarAction(action) {
    if (action === "Autentificare") this.router.navigate([""]);
    if (action === "LIVRARE") this.router.navigate(["./todo"]);
    if (action === "INCARCARE") this.router.navigate(["./toget"]);
    if (action === "Setari") this.router.navigate(["./settings"]);
  }

  loaded(data) {
    console.log('loaded!');
    this._data
      .postLoaded(data)
      .subscribe(data => (data));
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
    this.sub.unsubscribe();
  }
}
