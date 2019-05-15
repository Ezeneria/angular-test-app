import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {StorageService} from './services/storage.service';
import {timer} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  viewSpiner = true;
  constructor(
    private authService: AuthService,
    private storageService: StorageService
  ) { }
  ngOnInit() {
    this.authService.getTokenFromServer().subscribe(token => {
      this.storageService.saveTocken(token);
      this.viewSpiner = false;
      this.authService.authenticated = true;
    });
  }
}
