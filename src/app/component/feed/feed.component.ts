import { Component, OnInit } from '@angular/core';

import { Post } from '../../data/Post';
import { POSTS } from '../../data/posts_test'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts: Post[] = POSTS;

  constructor() { }

  ngOnInit(): void {
  }

}
