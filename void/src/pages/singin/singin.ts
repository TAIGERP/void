import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { PhotoFeed } from '../photofeed/photofeed';
import { UserService } from '../../providers/user-service';

@Component({
  selector: 'page-singin',
  templateUrl: 'singin.html'
})
export class SingIn {
	public pass :any;
	public email:any;
  constructor(private alertCtrl: AlertController , private loadingCtrl: LoadingController,public navCtrl: NavController, private userS: UserService) {
  	this.email = "";
  	this.pass = "";
  }



  Login()
  {

  		
  	this.userS.loginUser(this.email,this.pass).then(authData => {
 
  	this.navCtrl.setRoot( PhotoFeed );
  }, error => {
  	      loader.dismiss();
  		let alert = this.alertCtrl.create({
	      title: 'Error loggin in',
	      subTitle: error.message,
	      buttons: ['OK']
	    });
	    alert.present();
  	});
	let loader = this.loadingCtrl.create({
	  		dismissOnPageChange: true,
	  	});
	  	
	  	loader.present();
  

  }
}
