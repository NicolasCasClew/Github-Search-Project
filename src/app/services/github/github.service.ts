import { Injectable } from '@angular/core';
//import {Http, Headers} from '@angular/http' //deprecado
import {HttpClient} from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
//import 'rxjs/add/operator/map'; //no hace nada?
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  

  private username: string;
  private client_id = '72dc4bfd53d626dd67aa';
  private client_secret = 'd78e4a1bc4519cd2ab379237d8f01ef368527728';

  constructor(private _http: HttpClient) {
    this.username = "nicolascasclew"
    
   }

   getUser(){
    console.log("owo")
    return this._http.get('https://api.github.com/users/'+this.username+ "?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
    .pipe(map(data => data));
      
   /* console.log("????")
   return this._http.get('http://api.github.com/users/'+this.username) */
}

  getRepos(){
    console.log('https://api.github.com/users/'+this.username+'/repos')
    return this._http.get('https://api.github.com/users/'+this.username+'/repos'+ "?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
    .pipe(map(data=>data));

    // secret = d78e4a1bc4519cd2ab379237d8f01ef368527728

}

updateUser(username: string) {
 this.username = username;
}
}
