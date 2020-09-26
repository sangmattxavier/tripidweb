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

  postLogin(username: String, password: String){
    this.http.post<Login>('http://localhost:8080/api/auth/signin', { 
      username: username,
      password: password
     }).subscribe({
        next: data => {
          console.log("Token: "+data.accessToken+"\nData: "+data);
          State.API = data.accessToken;
          State.id = data.id;
        },
        error: error => console.error('There was an error!', error)
      })
  }

  postSignup(username: String, email: String, password: String){
    this.http.post('http://localhost:8080/api/auth/signup', { 
      username: username,
      email: email,
      password: password,
      roles: ["user"]
     }).subscribe({
        next: data => console.log(data),
        error: error => console.error('There was an error!', error)
      })
  }

  getTripsByUserId(): Observable<Trip[]>{
    const headers = new HttpHeaders().set('x-access-token', State.API)
    return this.http.get<Trip[]>('http://localhost:8080/api/trips/'+State.id, { headers });
  }
}