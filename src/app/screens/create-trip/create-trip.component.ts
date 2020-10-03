import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.less']
})
export class CreateTripComponent implements OnInit {
  titleCreateTrip: String;
  typeCreateTrip: String;
  locationCreateTrip: String;
  startDate: Date;
  endDate: Date;
  invite: String;
  invites: [String] = null;
  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
  }

  createTrip(){
    this.appService.postTrip(this.titleCreateTrip, this.typeCreateTrip, this.locationCreateTrip, this.invites, this.startDate, this.endDate).subscribe({
      next: data => {
        console.log("Post trip")
        console.log("\tStatus Code: ", data.status);
        console.log("\tData: ", data);
        this.router.navigateByUrl("/home");
      },
      error: error => console.error('There was an error!', error)
    })
  }
  
  addInvite(){
    if(this.invite != null){
      if(this.invites == null){
        console.log("Adding invite: "+this.invite);
        this.invites = [this.invite];
      } else if(!this.invites.includes(this.invite)){
        console.log("Adding invite: "+this.invite);
        this.invites.push(this.invite);
      } else {
        console.log("Invalid email");
      }
    } else {
      console.log("Invalid email");
    }
  }

  deleteInvite(invite: String){
    const index = this.invites.indexOf(invite, 0);
    if (index > -1) {
      this.invites.splice(index, 1);
    }
  }
}
