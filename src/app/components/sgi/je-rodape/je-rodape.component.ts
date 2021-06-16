import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-je-rodape',
  templateUrl: './je-rodape.component.html',
  styleUrls: ['./je-rodape.component.scss']
})
export class JeRodapeComponent implements OnInit {

  environment: any;
  appTitle: string = 'CVC-Financial Schedules';

  constructor() {
    this.environment = environment;
  }

  ngOnInit() {
  }

}
