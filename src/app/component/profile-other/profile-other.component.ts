import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'app/services/users.service';
import { PostsService } from 'app/services/posts.service';
import { User } from 'app/data/User';
import { map } from 'rxjs';


@Component({
  selector: 'app-profile-other',
  templateUrl: './profile-other.component.html',
  styleUrls: ['./profile-other.component.css']
})
export class ProfileOtherComponent implements OnInit {

  user$ = this.usersService.currentUserProfile$;

  userOtherID: string | undefined;
  userOther: User | undefined;
  userOtherPosts: any;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const userID = routeParams.get('userID');
    this.userOtherID = userID!;
    this.usersService.userByUID(userID!).pipe(map(user => this.userOther = user!)).subscribe();
    this.userOtherPosts = this.postsService.postsByUser(userID!);
  }

}
