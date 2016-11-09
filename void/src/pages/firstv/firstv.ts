import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SingIn } from '../singin/singin';
import { SingUp } from '../singup/singup';


@Component({
    selector: 'page-firstv',
  templateUrl: 'firstv.html'
})
export class FirstV {
  constructor(public navCtrl: NavController) {

  }
  SingInF()
  {
  	this.navCtrl.push(SingIn);
  }
  SingUpF()
  {
  	this.navCtrl.push(SingUp);
  }
}
