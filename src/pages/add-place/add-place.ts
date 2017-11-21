import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtr:ModalController) {
  }

  onSubmit(form:NgForm){
    console.log(form.value);
  }

  onOpenMap(){
    const modal = this.modalCtr.create(SetLocationPage , {location:this.location});
    modal.present();
    modal.onDidDismiss(data => {
      this.location.lat = data.location.lat;
      this.location.lng = data.location.lng;
      console.log(data);
    });
  }

}
