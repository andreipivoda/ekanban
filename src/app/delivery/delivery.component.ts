import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../data.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-delivery",
  templateUrl: "./delivery.component.html",
  styleUrls: ["./delivery.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class DeliveryComponent implements OnInit {
  constructor(private _data: DataService, private router: Router) {}

  sub: Subscription;
  tdata: any;
  displayedColumns: string[] = ["line","reference","units","loaded","completed"];
  ngOnInit() {
    console.log("delivery oninit");
    this.sub = this._data.getDelivery().subscribe(value => {
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
