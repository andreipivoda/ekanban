import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: "app-delivery",
  templateUrl: "./delivery.component.html",
  styleUrls: ["./delivery.component.css"]
})
export class DeliveryComponent implements OnInit {
  constructor(private _data: DataService, private router: Router) {
    // setInterval(() => { console.log(this.delivery)}, 1000);
  }
  tdata = [
    {
      position: 1,
      partno: "09743290flkfd",
      location: 1.555079,
      quantity: "FFF",
      delivered: false
    }
  ];

  delivery;
  ttype = "delivery";
  ngOnInit() {
    this._data.getDelivery().subscribe(data => {
      this.delivery = data;
    });
  }

  sideBarAction(action) {
    if (action === "Autentificare") this.router.navigate([""]);
    if (action === "LIVRARE") this.router.navigate(["./todo"]);
    if (action === "INCARCARE") this.router.navigate(["./toget"]);
    if (action === "Setari") this.router.navigate(["./settings"]);
  }
}
