import { Component, OnInit } from '@angular/core';
import { faHome, faDesktop, faUsersCog, faCogs, faCog, faMobileAlt, faChartBar, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faBell, faStickyNote } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  faDesktop = faDesktop;
  faHome = faHome;
  faUsers = faUsersCog;
  faBell = faBell;
  faMobile = faMobileAlt;
  faChartBar = faChartBar;
  faDatabase = faDatabase;
  faStickyNote = faStickyNote;
  faCogs = faCogs;
  faCog = faCog;

  constructor() { }

}
