import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthenticationService } from 'angular-authentication-service';
import { AuthenticationService } from './services/authentication.service';
//import { UsersService } from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  constructor(public authService: AuthenticationService,
    private router: Router){}

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}