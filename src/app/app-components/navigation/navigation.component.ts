import { Component } from '@angular/core';
import { faHome, faCogs, faDesktop, faMobile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  faHome = faHome;
  faCogs = faCogs;
  faDesktop = faDesktop;
  faMobile = faMobile;
}
