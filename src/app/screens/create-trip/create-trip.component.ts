import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { AppService } from 'src/app/app.service';
import { Location } from '../../models';
@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.less']
})
export class CreateTripComponent implements OnInit {
  @ViewChild("placesRef") placesRef : GooglePlaceDirective;
  titleCreateTrip: String;
  typeCreateTrip: String;
  startDate: Date;
  endDate: Date;
  invite: String;
  invites: [String] = null;
  locations: [Location] = null;
  location: Address;

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
  }

  createTrip(){
    this.appService.postTrip(this.titleCreateTrip, this.typeCreateTrip, this.locations, this.invites, this.startDate, this.endDate).subscribe({
      next: data => {
        console.log("Post trip")
        console.log("\tStatus Code: ", data.status);
        console.log("\tData: ", data);
        this.router.navigateByUrl("/home");
      },
      error: error => console.error('There was an error!', error)
    })
  }

  public handleAddressChange(address: Address) {
    console.log("Address: ", address)
    console.log("Lat: ", address.geometry.location.lat())
    console.log("Long: ", address.geometry.location.lng())
    this.location = address;
  }

  addLocation(){
    if(this.location != null){
      const loc = new Location(this.location.formatted_address, this.location.formatted_address, this.location.geometry.location.lng(), this.location.geometry.location.lat())
      if(this.locations == null){
        console.log("Adding loc: ", loc);
        this.locations = [loc];
      } else if(!this.locations.includes(loc)){
        console.log("Adding loc: ", loc);
        this.locations.push(loc);
      } else {
        console.log("Invalid loc");
      }
    } else {
      console.log("Invalid loc");
    }
  }

  deleteLocation(location: Location){
    const index = this.locations.indexOf(location, 0);
    if (index > -1) {
      this.locations.splice(index, 1);
    }
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
