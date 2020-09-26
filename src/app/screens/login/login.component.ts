import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { State } from 'src/app/state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.appService.postLogin(this.username, this.password).subscribe({
      next: data => {
        console.log("Post login")
        console.log("\tStatus Code: ", data.status);
        if(data.status == 200){
          console.log("\tData: ", data);
          console.log("\tToken: ", data.body.accessToken);
          State.API = data.body.accessToken;
          State.id = data.body.id;
          this.router.navigateByUrl('/home');
        }
      },
      error: error => console.error('There was an error!', error)
    });
  }
}
