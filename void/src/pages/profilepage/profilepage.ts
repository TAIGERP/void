import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';

@Component({
  selector: 'page-profilepage',
  templateUrl: 'profilepage.html'
})
export class ProfilePage {
	public name:string;
  constructor(public navCtrl: NavController,public navParams: NavParams) {
  	this.name = this.navParams.get("item");
  }
}
