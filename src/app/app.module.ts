import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { LoginComponent } from './screens/login/login.component';
import { SignupComponent } from './screens/signup/signup.component';
import { HomeComponent } from './screens/home/home.component';
import { CreateTripComponent } from './screens/create-trip/create-trip.component';
import { TripComponent } from './screens/trip/trip.component'
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CreateTripComponent,
    TripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    GoogleMapsModule,
    HttpClientModule,
    FormsModule,
    GooglePlaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
