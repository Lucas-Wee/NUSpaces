import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/services/users.service';
import { PostsService } from 'app/services/posts.service';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user$ = this.usersService.currentUserProfile$;
  posts = this.user$.pipe(concatMap((user) => this.postsService.postsByUser(user?.uid)))

  constructor(
    private usersService: UsersService,
    private postsService: PostsService
    ) { }

  ngOnInit(): void {
  }

}
