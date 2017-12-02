import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddPlacePage} from "../add-place/add-place";
import {Place} from "../../models/place";
import {PlacesService} from "../../services/places";



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  places:Place[] = [];
  addPlacePage = AddPlacePage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private placesSrc:PlacesService) {
  }

  ionViewWillEnter(){
    this.places = this.placesSrc.loadPlaces();
  }

}
