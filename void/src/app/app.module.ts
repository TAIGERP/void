import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Feed } from '../providers/feed';
import { ConnectivityService } from '../providers/connectivity-service';
import { UserService } from '../providers/user-service';

import { ChuseUser } from '../pages/chuseuser/chuseuser';
import { FirstV } from '../pages/firstv/firstv';
import { HomePage } from '../pages/home/home';
import { PhotoFeed } from  '../pages/photofeed/photofeed';
import { SearchFriends } from '../pages/searchfriend/searchfriend';
import { ProfilePage } from '../pages/profilepage/profilepage';
import { MapPage } from  '../pages/map/map';
import { FullScreen } from '../pages/fullscreen/fullscreen';
import { SingIn } from  '../pages/singin/singin';
import { SingUp } from  '../pages/singup/singup';
import { TakePhoto } from  '../pages/takephoto/takephoto';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChuseUser,
    TakePhoto,
    SingUp,
    SingIn,
    FullScreen,
    MapPage,
    ProfilePage,
    SearchFriends,
    PhotoFeed,
    FirstV
    
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    
    ChuseUser,
    TakePhoto,
    SingUp,
    SingIn,
    FullScreen,
    MapPage,
    ProfilePage,
    SearchFriends,
    PhotoFeed,
    FirstV
  ],
  providers: [Feed,ConnectivityService,UserService]
})
export class AppModule {}
