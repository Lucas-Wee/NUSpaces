import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/services/authentication.service';
//import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  
  user$ = this.authService.currentUser$;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}
}