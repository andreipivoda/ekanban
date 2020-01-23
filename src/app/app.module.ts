import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// CUSTOM
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTableModule } from "@angular/material/table";
import { LoadingComponent } from "./load/load.component";
import { DeliveryComponent } from "./delivery/delivery.component";
import { LoginComponent } from "./login/login.component";
import { SettingsComponent } from "./settings/settings.component";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatListModule } from "@angular/material/list";
@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    DeliveryComponent,
    LoginComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatTableModule,
    MatListModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
