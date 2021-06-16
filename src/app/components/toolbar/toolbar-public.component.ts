import {Component} from '@angular/core';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-toolbar-public',
  styleUrls: ['./toolbar.component.scss'],
  templateUrl: './toolbar-public.component.html'
})
export class ToolbarPublicComponent {
  environment: any;

  constructor() {
    this.environment = environment;
  }
}
