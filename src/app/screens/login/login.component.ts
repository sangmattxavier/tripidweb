import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  login(){
    this.appService.postLogin(this.username, this.password);
  }
}
