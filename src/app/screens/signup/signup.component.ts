import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {
  emailSignUp: String;
  usernameSignUp: String;
  passwordSignUp: String;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }
  
  signup(){
    this.appService.postSignup(this.usernameSignUp, this.emailSignUp, this.passwordSignUp);
  }
}
