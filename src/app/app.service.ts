import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { 

  }

  postLogin(username: String, password: String){
    this.http.post('http://localhost:8080/api/auth/signin', { 
      username: username,
      password: password
     }).subscribe({
    next: data => console.log(data),
    error: error => console.error('There was an error!', error)
  })
  }
}
