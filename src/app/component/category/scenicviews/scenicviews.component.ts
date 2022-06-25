import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/services/users.service';
import { PostsService } from 'app/services/posts.service';

@Component({
  selector: 'app-scenicviews',
  templateUrl: './scenicviews.component.html',
  styleUrls: ['./scenicviews.component.css']
})
export class ScenicviewsComponent implements OnInit {

  user$ = this.usersService.currentUserProfile$;
  posts = this.postsService.postsByCategory('scenicviews');

  constructor(
    private usersService: UsersService,
    private postsService: PostsService
    ) { }

  ngOnInit(): void {
  }

}
