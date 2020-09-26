import { Component, OnInit } from '@angular/core';
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
  constructor(private appService: AppService) { }

  ngOnInit(): void {
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
