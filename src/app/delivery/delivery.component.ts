import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../data.service";
import { Subscription } from "rxjs";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

@Component({
  selector: "app-delivery",
  templateUrl: "./delivery.component.html",
  styleUrls: ["./delivery.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class DeliveryComponent implements OnInit {
  viewport = "large";
  user;
  constructor(
    public _data: DataService,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    console.log("constructor");
    breakpointObserver
      .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
      .subscribe(result => {
        if (result.matches) {
          // console.log('match',result.matches,result)
          this.viewport = "small";
        }
      });
  }

  sub: Subscription;
  tdata: any;
  displayedColumns: string[] = ["line", "reference", "units", "actions"];
  ngOnInit() {
    console.log("ngOnInit");
    console.log("delivery oninit");
    this.user = localStorage.getItem("activeUser");
    this.sub = this._data.getDelivery().subscribe(value => {
      this.tdata = value;
    });
    console.log("this.viewport", this.viewport);
  }

  sideBarAction(action) {
    if (action === "Autentificare") this.router.navigate([""]);
    if (action === "LIVRARE") this.router.navigate(["./todo"]);
    if (action === "INCARCARE") this.router.navigate(["./toget"]);
    if (action === "Setari") this.router.navigate(["./settings"]);
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
    this.sub.unsubscribe();
  }
}
