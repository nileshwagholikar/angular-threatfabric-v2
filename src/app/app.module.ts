import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';


// High charts
import { ChartModule } from 'angular-highcharts';

// Icons font
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app-components/header/header.component';
import { FooterComponent } from './app-components/footer/footer.component';
import { NavigationComponent } from './app-components/navigation/navigation.component';
import { DevicesComponent } from './app-pages/devices/devices.component';
import { DetailsComponent } from './app-pages/details/details.component';
import { SettingsComponent } from './app-pages/settings/settings.component';
import { DashboardComponent } from './app-pages/dashboard/dashboard.component';
import { AppPageNotFoundComponent } from './app-page-not-found/app-page-not-found.component';
import { AppDetailsComponent } from './app-pages/app-details/app-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    DevicesComponent,
    DetailsComponent,
    SettingsComponent,
    DashboardComponent,
    AppPageNotFoundComponent,
    AppDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,  // add ngBootstrap modules to application
    FontAwesomeModule, // add Fontawesome icons to application
    ChartModule // add Chart modules to application
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
