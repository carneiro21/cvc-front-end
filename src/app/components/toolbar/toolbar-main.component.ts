import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar-main',
  styleUrls: ['./toolbar.component.scss'],
  templateUrl: './toolbar-main.component.html'
})
export class ToolbarMainComponent {

  identityName = 'CVC User';
  environment: any;

  constructor(
    private router: Router
  ) {
    
  }

  async doLogout() {
    
  }
}
