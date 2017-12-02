import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import { Geolocation } from "ionic-native";
import { NgForm} from "@angular/forms";
import { SetLocationPage} from "../set-location/set-location";
import { Location } from "../../models/location";

@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {

  location : Location = {
    lat: -32.928669,
    lng: 151.776249
  }
  locationIsSet = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtr:ModalController) {
  }

  onSubmit(form:NgForm){
    console.log(form.value);
  }

  onOpenMap(){
    const modal = this.modalCtr.create(SetLocationPage , {location:this.location, isSet:this.locationIsSet});
    modal.present();
    modal.onDidDismiss(data => {
      if(data) {
        /*
        this.location.lat = data.location.lat;
        this.location.lng = data.location.lng;
        console.log(data);
        */
        this.location = data.location;
        this.locationIsSet = true;
        console.log("OK");
      }
    });
  }

  onLocate(){
    Geolocation.getCurrentPosition().then(data => {
      console.log(data);
      this.location.lat = data.coords.latitude;
      this.location.lng = data.coords.longitude;
      this.locationIsSet = true;
    }).catch(error => {
      console.log(error);
    });
  }

}
