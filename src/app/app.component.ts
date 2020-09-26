import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'tripidweb';
  username: String;
  password: String;

  trips = ["test","test","test","test","test","test"];
  days = [["test","test","test","test","test","test"], ["test","test","test","test","test","test"], ["test","test","test","test","test","test"]];
  supplies = ["test","test","test","test","test","test"];

  constructor(private appService: AppService){
  }

  login(){
    this.appService.postLogin(this.username, this.password);
  }
}
