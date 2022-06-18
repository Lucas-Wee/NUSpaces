import { Component, OnInit } from '@angular/core';
import { User } from '../../data/User'
import { AuthenticationService } from 'app/services/authentication.service';
import { UsersService } from 'app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user$ = this.usersService.currentUserProfile$;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

}
