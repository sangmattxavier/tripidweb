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
  }

  get(){
    this.appService.getTripsByUserId().subscribe(
      data => {
        this.trips = data;
      },
      error => console.error('There was an error!', error))
  }
}
