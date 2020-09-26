import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  trips : Trip[];
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getTrips();
  }

  getTrips(){
    this.appService.getTripsByUserId().subscribe(
      data => {
        console.log("Get trips by user id")
        console.log("\tStatus Code: ", data.status);
        console.log("\tData: ", data);
        this.trips = data.body as Trip[];
      },
      error => console.error('There was an error!', error))
  }
}
