import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trip } from 'src/app/models';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.less']
})
export class TripComponent implements OnInit {
  id: string;
  trip: Trip;
  days = [["test","test","test","test","test","test"], ["test","test","test","test","test","test"], ["test","test","test","test","test","test"]];
  supplies = ["test","test","test","test","test","test"];

  constructor(private activatedroute: ActivatedRoute, private appService: AppService) {
    this.activatedroute.params.subscribe(data => {
        this.id = data as unknown as string;
    })
    this.appService.getTripByTripId(this.id).subscribe(
      data => {
        console.log("Get trip by trip id");
        console.log("\tStatus Code: ", data.status);
        console.log("\tData: ", data);
        this.trip = data.body as Trip;
      },
      error => console.error('There was an error!', error));
  }

  ngOnInit(): void {
  }

}
