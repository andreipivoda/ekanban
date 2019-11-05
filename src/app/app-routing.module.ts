import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryComponent } from './delivery/delivery.component';
import { DispatchesComponent } from './dispatches/dispatches.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'toget', component: DeliveryComponent },
  { path: 'todo',      component: DispatchesComponent },
  { path: 'settings',      component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
