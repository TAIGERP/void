import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';

@Component({
 selector: 'page-fullscreen',
  templateUrl: 'fullscreen.html'
})
export class FullScreen {
	public iteme: string;
  constructor(public navCtrl: NavController,public navParams: NavParams) {

  	this.iteme = this.navParams.get("photo");

  }
}
