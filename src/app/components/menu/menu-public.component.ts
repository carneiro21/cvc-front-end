import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-menu-public',
  styleUrls: ['./menu.component.scss'],
  templateUrl: './menu.component.html'
})
export class MenuPublicComponent implements OnInit {
  identity: any;
  environment: any;

  searchOption: string;
  menuItens: any[];

  constructor() {
    this.environment = environment;
  }

  ngOnInit() {
    this.menuItens = [];
  }

  async doLogout() { }
}
