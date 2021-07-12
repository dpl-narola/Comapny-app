import { Component } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'company-app';
  currentLocation: any
  token = localStorage.getItem('Token')
  redirecturl =''
  constructor(
    private location: Location,
    private router: Router,
  ) {
    this.location.onUrlChange(x => this.currentLocation = x);
    console.log(this.currentLocation != '/');
    if (!this.token) {
      this.router.navigate(['/']);
      this.redirecturl = '/'
    } else {
      this.redirecturl = '/company-list'
    }
  }

  logout() {
    localStorage.removeItem('Token')
    this.router.navigate(['/']);
  }
}
