import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/services/users.service';
import { PostsService } from 'app/services/posts.service';

@Component({
  selector: 'app-hiddengems',
  templateUrl: './hiddengems.component.html',
  styleUrls: ['./hiddengems.component.css']
})
export class HiddengemsComponent implements OnInit {

  user$ = this.usersService.currentUserProfile$;
  posts = this.postsService.postsByCategory('hiddengems');

  constructor(
    private usersService: UsersService,
    private postsService: PostsService
    ) { }

  ngOnInit(): void {
  }

}
