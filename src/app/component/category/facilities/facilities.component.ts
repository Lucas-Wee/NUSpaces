import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/services/users.service';
import { PostsService } from 'app/services/posts.service';


@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {

  user$ = this.usersService.currentUserProfile$;
  posts = this.postsService.postsByCategory('facilities');

  constructor(
    private usersService: UsersService,
    private postsService: PostsService
    ) { }

  ngOnInit(): void {
  }

}
