import { Component, OnInit } from '@angular/core';

import { Post } from '../../data/Post';
import { PostsService } from 'app/services/posts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  allPosts: Observable<Post[]> = this.postsService.allPosts$;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

}
