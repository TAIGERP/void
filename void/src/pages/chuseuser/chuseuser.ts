import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';

@Component({   
	selector: 'page-chuseuser',
  templateUrl: 'chuseuser.html'
})
export class ChuseUser {
	public user: string;
  constructor(public navCtrl: NavController,public navParams: NavParams) {

  	this.user = this.navParams.get('usr');
  	
  	console.log(this.user + " the string");

  }
}

