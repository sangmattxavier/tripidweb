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

  emailSignUp: String;
  usernameSignUp: String;
  passwordSignUp: String;

  trips = ["test","test","test","test","test","test"];
  days = [["test","test","test","test","test","test"], ["test","test","test","test","test","test"], ["test","test","test","test","test","test"]];
  supplies = ["test","test","test","test","test","test"];

  constructor(private appService: AppService){
  }

  login(){
    this.appService.postLogin(this.username, this.password);
  }

  signup(){
    this.appService.postSignup(this.usernameSignUp, this.emailSignUp, this.passwordSignUp);
  }
}
