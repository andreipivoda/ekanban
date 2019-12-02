import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { DataService } from '../data.service';

@Component({
  selector: "app-dispatches",
  templateUrl: "./dispatches.component.html",
  styleUrls: ["./dispatches.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class DispatchesComponent implements OnInit {
  sub: Subscription;
  tdata: any;
  displayedColumns: string[] = ["line","reference","units","loaded","completed","actions"];
  constructor(private _data: DataService,private router: Router) {}
  ngOnInit() {
    console.log("dispatches oninit");
    this.sub = this._data.getDispatches().subscribe(value => {
      this.tdata = value;
    });
  }
  sideBarAction(action) {
    if (action === "Autentificare") this.router.navigate([""]);
    if (action === "LIVRARE") this.router.navigate(["./todo"]);
    if (action === "INCARCARE") this.router.navigate(["./toget"]);
    if (action === "Setari") this.router.navigate(["./settings"]);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
