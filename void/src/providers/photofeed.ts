import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';


/*
  Generated class for the Photofeed provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Photofeed {

	public storage:any;
  constructor(public http: Http) {
  	this.storage = firebase.storage().ref();
  }






}
