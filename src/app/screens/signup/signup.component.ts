import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
  }
  
  signup(){
    this.appService.postSignup(this.usernameSignUp, this.emailSignUp, this.passwordSignUp).subscribe({
      next: data => {
        console.log("Post signup")
        console.log("\tStatus Code: ", data.status);
        console.log("\tData: ", data);
        this.router.navigateByUrl('');
      },
      error: error => console.error('There was an error!', error)
    });
  }
}
