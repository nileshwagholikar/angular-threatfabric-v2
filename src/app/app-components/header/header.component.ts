import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faBars = faBars;
  openMenu = true;

  /*--- Toggle Left Navigation ---*/
  toggleMenu() {
    const appNav = document.querySelector('.t-navigation') as HTMLDivElement,
          appHeader = document.querySelector('.t-header') as HTMLDivElement,
          appContent = document.querySelector('.t-page-content') as HTMLDivElement;

    if(this.openMenu) {
      this.openMenu = false;
      appNav.style.marginLeft = '-80px';
      appHeader.style.paddingLeft = '0px';
      appContent.style.paddingLeft = '0px';
    } else {
      this.openMenu = true;
      appNav.style.marginLeft = '0px';
      appHeader.style.paddingLeft = '80px';
      appContent.style.paddingLeft = '80px';
    }
  }

}
