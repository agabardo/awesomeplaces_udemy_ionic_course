import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {PlacePage} from "../pages/place/place";
import {AddPlacePage} from "../pages/add-place/add-place";
import {SetLocationPage} from "../pages/set-location/set-location";
import {AgmCoreModule} from "angular2-google-maps/esm/core";
import {PlacesService} from "../services/places";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlacePage,
    AddPlacePage,
    SetLocationPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBirIVcetyxjcm45OwxEQMsW22kPpj6yus'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlacePage,
    AddPlacePage,
    SetLocationPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PlacesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
