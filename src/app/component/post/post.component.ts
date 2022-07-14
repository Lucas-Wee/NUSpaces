import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../data/Post';
import { PostsService } from 'app/services/posts.service';
import { UsersService } from 'app/services/users.service';
import { User } from '@angular/fire/auth';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  user$ = this.usersService.currentUserProfile$;
  @Input() post!: Post;

  constructor(
    private postsService: PostsService,
    private usersService: UsersService,
    private toast: HotToastService
  ) { }

  ngOnInit(): void {
  }

  userLikePost() {
    console.log();
    this.postsService
    .likePost(this.post.id)
      .pipe(
        this.toast.observe({
          loading: 'Liking post...',
          success: 'Post liked',
          error: 'There was an error in liking the post'
        })
    )
    .subscribe();
  }

  userUnlikePost() {
    console.log();
    this.postsService
    .unlikePost(this.post.id)
      .pipe(
        this.toast.observe({
          loading: 'Unliking post...',
          success: 'Post unliked',
          error: 'There was an error in unliking the post'
        })
    )
    .subscribe();
  }

}
