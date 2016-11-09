import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import * as firebase from 'firebase';

import { FirstV } from '../pages/firstv/firstv';
import { PhotoFeed } from '../pages/photofeed/photofeed';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  public rootPage: any;

  constructor(platform: Platform) {

     var config = {
      apiKey: "AIzaSyDcb6xX51Agm10XinpkGfmIKylEggCiKQc",
      authDomain: "photofeed-c6ca1.firebaseapp.com",
      databaseURL: "https://photofeed-c6ca1.firebaseio.com",
      storageBucket: "photofeed-c6ca1.appspot.com",
      messagingSenderId: "999634224684"
    };
    firebase.initializeApp(config);
    //check logged in status
    firebase.auth().onAuthStateChanged((user) => {
    
    if(user){
      this.rootPage = PhotoFeed;
    }else {
      //this.rootPage = LoginPage;
      this.rootPage = FirstV;
    }
    
  });


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
