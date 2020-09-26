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
  username: String;
  password: String;

  emailSignUp: String;
  usernameSignUp: String;
  passwordSignUp: String;

  titleCreateTrip: String;
  typeCreateTrip: String;
  locationCreateTrip: String;

  trips : Trip[];
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

  get(){
    this.appService.getTripsByUserId().subscribe(
      data => {
        this.trips = data;
      },
      error => console.error('There was an error!', error))
  }

  createTrip(){
    this.appService.postTrip(this.titleCreateTrip, this.typeCreateTrip, this.locationCreateTrip).subscribe({
      next: data => {
        console.log("Created Trip");
        console.log(data);
      },
      error: error => console.error('There was an error!', error)
    })
  }
}
