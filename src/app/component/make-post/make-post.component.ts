import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { PostsService } from 'app/services/posts.service';

@Component({
  selector: 'app-make-post',
  templateUrl: './make-post.component.html',
  styleUrls: ['./make-post.component.css']
})
export class MakePostComponent implements OnInit {

  postForm = new FormGroup({
    category: new FormControl(''),
    comment: new FormControl(''),
  })

  constructor(
    private postsService: PostsService,
    private toast: HotToastService) { }

  ngOnInit(): void {
  }

  savePost() {
    const postData = this.postForm.value;
    this.postsService
      .addPost(postData)
      .pipe(
        this.toast.observe({
          loading: 'Making post...',
          success: 'Post made successfully',
          error: 'There was an error in making the post'
        })
      )
      .subscribe();
  }
}
