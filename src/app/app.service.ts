import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { state } from '@angular/animations';
import { State } from './state';
import { Login, Trip } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { 

  }

  postLogin(username: String, password: String): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/auth/signin', { 
      username: username,
      password: password
     }, { observe: 'response' })
  }

  postSignup(username: String, email: String, password: String): Observable<any>{
    return this.http.post('http://localhost:8080/api/auth/signup', { 
      username: username,
      email: email,
      password: password,
      roles: ["user"]
     }, { observe: 'response' })
  }

  getTripByTripId(id: string): Observable<any>{
    const headers = new HttpHeaders().set('x-access-token', State.API)
    return this.http.get<any>('http://localhost:8080/api/trip/'+id, { 
      headers: headers, 
      observe: 'response'
    });
  }

  getTripsByUserId(): Observable<any>{
    const headers = new HttpHeaders().set('x-access-token', State.API)
    return this.http.get<any>('http://localhost:8080/api/trips/'+State.id, { 
      headers: headers, 
      observe: 'response'
    });
  }

  postTrip(title: String, type: String, location: String, invites: [String], startDate?: Date, endDate?: Date): Observable<any>{
    const headers = new HttpHeaders().set('x-access-token', State.API)
    if(invites == null) {
      return this.http.post<any>('http://localhost:8080/api/trip', { 
        title: title,
        type: type,
        locations: [location],
        start_date: startDate,
        end_date: endDate,
        participant_ids:[State.id],
       }, {
         headers: headers, 
         observe: 'response'
      });
    } else {
      return this.http.post<any>('http://localhost:8080/api/trip', { 
        title: title,
        type: type,
        locations: [location],
        start_date: startDate,
        end_date: endDate,
        participant_ids:[State.id],
        pending_invites: invites,
       }, {
         headers: headers, 
         observe: 'response'
      });
    }
  }
}