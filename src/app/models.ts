export class Login {
    accessToken: string;
    email: String;
    id: String;
    roles: String[];
    username: String;
  }
  
export class Trip {
    locations: Location[];
    pins: Pin[];
    start_date: Date = null;
    end_date: Date = null;
    participant_ids: String[];
    itinerary_list: String[];
    supply_list: String[];
    _id: string;
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

export class Pin {
  constructor(
    public long: Number,
    public lat: Number,
    public comment: Comment,
    public start_time: Date,
    public end_time: Date,
    public vote_up: Number,
    public vote_down: Number,
  ){}
}

export class Comment {
  constructor(
    public label: String,
    public user: String,
  ){}
}