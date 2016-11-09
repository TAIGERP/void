import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Feed provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Feed {

 private data: any;
 perpage:number = 6;
  constructor(private http: Http) {
  
  }
  feedd(){


  	this.http.get('https://randomuser.me/api/?results=3')
  	.map(res => res.json())
  	.subscribe(data => {
        this.data = data.results;
  	});

  }

  getPosts()
  {
  
  
  return new Promise(resolve => {
    this.http.get('https://randomuser.me/api/?results=3')
      .map(res => res.json())
      .subscribe(data => {
        this.data = data.results;
        resolve(data.results);
      });
  });

  }

	load(start:number=0) {

    return new Promise(resolve => {
      
      this.http.get('https://randomuser.me/api/?results=' + start)
        .map(res => res.json())
        .subscribe(data => {

          resolve(data.results);

        });
    });
  }

}

