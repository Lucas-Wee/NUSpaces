import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/services/users.service';
import { PostsService } from 'app/services/posts.service';

@Component({
  selector: 'app-studyspots',
  templateUrl: './studyspots.component.html',
  styleUrls: ['./studyspots.component.css']
})
export class StudyspotsComponent implements OnInit {

  user$ = this.usersService.currentUserProfile$;
  posts = this.postsService.postsByCategory('studyspots');

  constructor(
    private usersService: UsersService,
    private postsService: PostsService
    ) { }

  ngOnInit(): void {
  }

}
