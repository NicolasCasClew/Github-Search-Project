import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit { // quitar OnIni si falla
  ngOnInit(): void {
    //throw new Error('Method not implemented.'); Nu-hu
  }
  public user: any = [];
  public repos: any = [];

  public username: string = '' //????

constructor(private _githubService: GithubService){
   this.user=false 
   /* this._githubService.getUser().subscribe(user =>{
    console.log(user)
    this.user = user;
  }) 

  this._githubService.getRepos().subscribe(repos =>{
    console.log(repos)
    this.repos = repos;
  }) */
}

searchUser(){
  this._githubService.updateUser(this.username);

  this._githubService.getUser().subscribe(user =>{
    console.log(user)
    this.user = user;
  }) 

  this._githubService.getRepos().subscribe(repos =>{
    console.log(repos)
    this.repos = repos;
  })
}


}
