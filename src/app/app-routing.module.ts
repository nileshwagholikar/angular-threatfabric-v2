import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './app-pages/settings/settings.component';
import { DevicesComponent } from './app-pages/devices/devices.component';
import { DetailsComponent } from './app-pages/details/details.component';
import { DashboardComponent } from './app-pages/dashboard/dashboard.component';
import { AppDetailsComponent } from './app-pages/app-details/app-details.component';
import { AppPageNotFoundComponent } from './app-page-not-found/app-page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'details', redirectTo: '/devices' },
  { path: 'devices/details/:id', component: DetailsComponent},
  { path: 'devices', component: DevicesComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'app-details', component: AppDetailsComponent},
  { path: '**', component: AppPageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
