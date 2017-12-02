import { Component } from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import { Geolocation, Camera } from "ionic-native";
import { NgForm} from "@angular/forms";
import { SetLocationPage} from "../set-location/set-location";
import { Location } from "../../models/location";
import {PlacesService} from "../../services/places";

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
  imageURL = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtr:ModalController,
    private loadingCtr:LoadingController,
    private toastCtr:ToastController,
    private placesService:PlacesService) {}

  onSubmit(form:NgForm){
    this.placesService.addPlace(form.value.title, form.value.description, this.location, this.imageURL);
    this.location = new Location(-32.928669,151.776249);
    this.imageURL = "";
    this.locationIsSet = false;
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
    const loader = this.loadingCtr.create({
      content: "Loading"
    });
    loader.present();

    Geolocation.getCurrentPosition().then(data => {
      this.location.lat = data.coords.latitude;
      this.location.lng = data.coords.longitude;
      this.locationIsSet = true;
      loader.dismiss();
    }).catch(error => {
      loader.dismiss();
      const toast = this.toastCtr.create({
        message:error,
        duration:2500
      });
      toast.present();
    });
  }

  onTakePhoto(){
    Camera.getPicture({
      encodingType:Camera.EncodingType.JPEG,
      saveToPhotoAlbum:true,
      allowEdit:true
    }).then(
      photoData => {
        this.imageURL = photoData;
      }
    ).catch(
      error => {
        window.alert(error)
      }
    );
  }

}
