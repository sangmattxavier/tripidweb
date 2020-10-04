import { DatePipe } from '@angular/common';

export class Login {
    accessToken: string;
    email: String;
    id: String;
    roles: String[];
    username: String;
  }
  
export class Trip {
    locations: String[];
    pins: String[];
    start_date: Date = null;
    end_date: Date = null;
    participant_ids: String[];
    itinerary_list: String[];
    supply_list: String[];
    _id: String;
    title: String;
    type: String;
}

export class Location {
  constructor(
    public label: String,
    public address: String,
    public long: Number,
    public lat: Number
  ){}
}