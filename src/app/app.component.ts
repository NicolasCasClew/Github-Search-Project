import { Component } from '@angular/core';
import { GithubService } from './services/github/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubService]
})
export class AppComponent {
  title = 'GitHub Searcher';
  
}

