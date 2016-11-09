import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController} from 'ionic-angular';


import { Feed } from '../../providers/feed';
import { TakePhoto } from '../takephoto/takephoto';
import { PhotoFeed } from '../photofeed/photofeed';
declare var google;
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Feed]
})
export class HomePage {
 
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  public posts:any;
  constructor(private navCtrl: NavController,private feed:Feed) {
 	this.feeder();
  }
 
  ionViewLoaded(){
    this.loadMap();
  }
 
  loadMap(){

    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
   

  }

  feeder() {
  	this.feed.getPosts().then(data => {this.posts=data;});
  }
  Capture() {
    this.navCtrl.push( TakePhoto );
  }
  Photofeed() {
    this.navCtrl.push( PhotoFeed );
  }
}