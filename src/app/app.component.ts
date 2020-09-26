import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Trip } from './models';
import { State } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'tripidweb';
  constructor(){
  }
}
