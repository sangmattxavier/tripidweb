import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'tripidweb';

  trips = ["test","test","test","test","test","test"];
  days = [["test","test","test","test","test","test"], ["test","test","test","test","test","test"], ["test","test","test","test","test","test"]];
  supplies = ["test","test","test","test","test","test"];
}
