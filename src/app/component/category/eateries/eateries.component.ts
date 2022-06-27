import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/services/users.service';
import { PostsService } from 'app/services/posts.service';

@Component({
  selector: 'app-eateries',
  templateUrl: './eateries.component.html',
  styleUrls: ['./eateries.component.css']
})
export class EateriesComponent implements OnInit {

  user$ = this.usersService.currentUserProfile$;
  posts = this.postsService.postsByCategory('eateries');

  constructor(
    private usersService: UsersService,
    private postsService: PostsService
    ) { }

  ngOnInit(): void {
  }

}
