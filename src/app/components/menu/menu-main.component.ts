import { Component,  OnInit } from '@angular/core';


import * as _ from 'underscore';


@Component({
  selector: 'app-menu-main',
  styleUrls: ['./menu.component.scss'],
  templateUrl: './menu.component.html'
})
export class MenuMainComponent implements OnInit {
  

  searchOption: string;
  menuItens: any[] =  [
    {title: 'Home Page', icon: 'home', router: 'home'},
    {title: 'Search Schedules', icon: 'search', router: 'scheduling/search-schedules'},
    {title: 'Schedule Transfer', icon: 'pending_actions', router: 'scheduling/schedule-transfer'}
  ];
  routes: any[] = [];
  userRoles: any[];

  constructor() {
    
  }

  ngOnInit(): void {
    
  }
  
}
