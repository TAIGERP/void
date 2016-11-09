import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import { FullScreen } from '../fullscreen/fullscreen';
import { Feed } from '../../providers/feed';
import { HomePage } from '../home/home';

import { UserService } from '../../providers/user-service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FirstV } from '../firstv/firstv';


@Component({
 selector: 'page-photofeed',
  templateUrl: 'photofeed.html',
  providers: [Feed]
})
export class PhotoFeed {
	public posts: any;
	public start:number=5;
	public iteme64code: string;
	public base64Image: string;
  constructor(private userS:UserService,public navCtrl: NavController, public navParams: NavParams, public feed:Feed,public http:Http) {
	this.feeder();

  	this.base64Image = this.navParams.get('photo');
  	
  	/*this.http.get('https://randomuser.me/api/?results=10')
  	.map(res => res.json())
  	.subscribe(data => {
        this.posts = data.results;
        
  	});*/
   
  }



  feeder() {
 this.feed.getPosts().then(data => {this.posts=data;});
  }
  
  Capture()
  {

  //call user service
  this.userS.logoutUser().then(() => {
    this.navCtrl.setRoot(FirstV);
  });

  	//this.navCtrl.push( TakePhoto );
  }
  Geomap() {
    this.navCtrl.push( HomePage )
  }

  itemTapped(event, item) {
  	this.iteme64code = item;
    this.navCtrl.push(FullScreen, {
      photo: this.iteme64code

    });  
	}

 

	loadPeople() {
    
    return new Promise(resolve => {
      
      this.feed.load(this.start)
      .then(data => {
        
       
          this.posts.concat(data);
        
        
        resolve(true);
        
      });
            
    });

  }



	doInfinite(infiniteScroll:any) {
     console.log('doInfinite, start is currently '+this.start);
     this.start+=5;
     
     this.loadPeople().then(()=>{
       infiniteScroll.complete();
     });
     
  }

}

