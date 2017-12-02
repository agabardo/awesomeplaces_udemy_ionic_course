import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { Location } from "../../models/location";

@IonicPage()
@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html',
})
export class SetLocationPage {

  location: Location;
  marker: Location;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtr: ViewController) {
    this.location = this.navParams.get('location');

      this.marker = this.navParams.get('location');

  }

  onSetMarker(event:any){
    //console.log(event);
    this.marker = new Location(event.coords.lat, event.coords.lng);
  }

  onConfirm(){
    this.viewCtr.dismiss({location:this.marker});
  }

  onAbort(){
    this.viewCtr.dismiss();
  }

}
