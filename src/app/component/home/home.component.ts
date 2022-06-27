import { Component, OnInit } from '@angular/core';
import { Post } from 'app/data/Post';
import { AuthenticationService } from 'app/services/authentication.service';
import { PostsService } from 'app/services/posts.service';
import { UsersService } from 'app/services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  
  user$ = this.usersService.currentUserProfile$;
  posts: Observable<Post[]> = this.postsService.allPosts$;


  constructor(
    private usersService: UsersService,
    private postsService: PostsService
    ) {}

  ngOnInit(): void {}
}