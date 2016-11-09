import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController} from 'ionic-angular';
import { ChuseUser } from '../chuseuser/chuseuser';
import { UserService } from '../../providers/user-service';
import { PhotoFeed } from '../photofeed/photofeed';

@Component({
 selector: 'page-singup',
  templateUrl: 'singup.html'
})
export class SingUp {
	public email:any;
	public pass:any;
	public name:any;
	public surname:any;
	public usr: string;
	public bday:any;

  constructor(public alertCtrl: AlertController , public loadingCtrl: LoadingController,public navCtrl: NavController, public userS: UserService) {

  }


signUserUp(){
  	
  	this.userS.signUpUser(this.email, this.pass, this.name, this.surname, this.usr, this.bday).then(authData => {
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

  UserName()
  {
  	console.log(this.usr + " the string2");
  	this.navCtrl.push( ChuseUser,{ usr: this.usr });
  }
}
