import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profilepage/profilepage'
@Component({
 selector: 'page-searchfriend',
  templateUrl: 'searchfriend.html'
})
export class SearchFriends {
	searchQuery: string = '';
	items: string[];
	

  constructor(public navCtrl: NavController) {
  	this.initializeItems();
  }
  initializeItems() {
  	this.items=['item1','item2','item2','item2','item2','item2','avelio','new','baltolomeo','chopper','sanji','nami'];
  }
  getItems(ev: any) {
  	this.initializeItems();
  	let val = ev.target.value;

  	if(val && val.trim() != '') {
  		this.items = this.items.filter((item) => {
  			return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
  		})
  	}
  }
   itemTapped(event, item) {
 
   this.navCtrl.push(ProfilePage, {
    item: item
   });  
}
}
