import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../data/User';

@Component({
  selector: 'app-profile-static',
  templateUrl: './profile-static.component.html',
  styleUrls: ['./profile-static.component.css']
})
export class ProfileStaticComponent implements OnInit {
  @Input() user?: User

  constructor() { }

  ngOnInit(): void {
    console.log(this.user?.displayName);
    console.log(this.user?.description);  
  }

}
