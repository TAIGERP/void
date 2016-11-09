import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {

	public fireAuth: any;
	public userProfile: any;

  constructor(public http: Http) {

  	 this.fireAuth = firebase.auth();
  	 this.userProfile = firebase.database().ref('users');

  }

  loginUser(email: string, password: string): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }
  
 logoutUser(){
 	return this.fireAuth.signOut();
 	//redirection
 }

 signUpUser(email: string , password: string,name:string, surname: string, usr: string, bday: string){
	
	//return this.fireAuth.createUserWithEmailAndPassword(email, password);

	return this.fireAuth.createUserWithEmailAndPassword(email, password).then((newUser) => {
		//sign in the user
		this.fireAuth.signInWithEmailAndPassword(email, password).then((authenticatedUser) => {
			//successful login, create user profile
		this.userProfile.child(authenticatedUser.uid).set({
			User: usr,
			email: email,
			Name: name,
			Surname: surname,
			BirthDay: bday
		});	
		});
	});
}


}
