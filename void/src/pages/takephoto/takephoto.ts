import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { PhotoFeed } from '../photofeed/photofeed';


@Component({
 selector: 'page-takephoto',
  templateUrl: 'takephoto.html'
})
export class TakePhoto {


	public base64Image: string;
  constructor(public navCtrl: NavController,public navParams: NavParams) {
  	this.takePhoto();
  
  }
 
  takePhoto()
  {
  		Camera.getPicture({
  		destinationType:  Camera.DestinationType.DATA_URL,
  		targetWidth: 1000,
  		targetHeight: 1000
  	}).then((imageData) => {
  		this.base64Image = "data:image/jpeg;base64," + imageData;
  		this.navCtrl.push(PhotoFeed,{ photo: this.base64Image
		});
  		  	}, (err) => {
  		console.log(err);
      this.navCtrl.pop();
  
  	});
  }

}
