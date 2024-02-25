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

  constructor(private _http: HttpClient) {
    this.username = "nicolascasclew"
    
   }

   getUser(){
    console.log("owo")
    return this._http.get('http://api.github.com/users/'+this.username)
    .pipe(map(data => data));
      
   /* console.log("????")
   return this._http.get('http://api.github.com/users/'+this.username) */
}
}
