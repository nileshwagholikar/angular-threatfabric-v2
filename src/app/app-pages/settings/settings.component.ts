import { Component, OnInit } from '@angular/core';
import { faHome, faCogs, faDesktop, faMobile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  faHome = faHome;
  faCogs = faCogs; 
  faDesktop = faDesktop;
  faMobile = faMobile;
  
  constructor() { }

}
