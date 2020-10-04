import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild("locationSection") locationSection: ElementRef;
  @ViewChild("invitationSection") invitationSection: ElementRef;
  titleCreateTrip: String;
  typeCreateTrip: String;
  startDate: Date;
  endDate: Date;
  invite: string;
  invites: [String] = null;
  locations: [Location] = null;
  location: Address;
  locationsOpened: boolean = false;
  invitationsOpened: boolean = false;

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
    if(this.location) {
      const loc = new Location(this.location.name, this.location.formatted_address, this.location.geometry.location.lng(), this.location.geometry.location.lat())
      if(!this.locations) {
        console.log("Adding loc bc null: ", loc);
        this.locations = [loc];
      } else {
        var locExists = this.locations.some(elem =>{
          return JSON.stringify(loc) === JSON.stringify(elem);
        });
        if(!locExists){
          console.log("Adding loc: ", loc);
          this.locations.push(loc);
        } else {
          console.log("Invalid loc inside");
        }
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
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(this.invite && re.test(this.invite)){
      if(!this.invites){
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

  toggleLocations(){
    if(this.locationsOpened){
      this.locationsOpened = false;
    } else {
      this.locationsOpened = true;
    }
    console.log("boolean: "+this.locationsOpened)
  }

  toggleInvitations(){
    if(this.invitationsOpened){
      this.invitationsOpened = false;
    } else {
      this.invitationsOpened = true;
    }
    console.log("boolean: "+this.invitationsOpened)
  }
}
