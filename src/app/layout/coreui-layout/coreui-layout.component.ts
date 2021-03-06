import { Component } from '@angular/core';

import { hNavItems, sNavItems, asideAcFixTabSetData } from '../layout-interface-and-const';

@Component({
  // Magic selector 'app-dashboard' here
  selector: 'app-dashboard',
  templateUrl: './coreui-layout.component.html'
})
export class CoreuiLayoutComponent {

  headerNavItems = hNavItems;
  sidebarNavItems = sNavItems;
  asideTabSet = asideAcFixTabSetData;
  sidebarMinimized = false;

  constructor() {
  }

  sideMinimize(e) {
    this.sidebarMinimized = e;
  }

  asideTabSelected(tab) {
    tab.active = true;
  }

  asideTabDeselect(tab) {
    tab.active = false;
  }

}
