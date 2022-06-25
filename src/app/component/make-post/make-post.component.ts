import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { PostsService } from 'app/services/posts.service';
import { UploadService } from 'app/services/upload.service';
import { empty, Observable, of, switchMap } from 'rxjs';
import { collection, Firestore, doc } from '@angular/fire/firestore'


@Component({
  selector: 'app-make-post',
  templateUrl: './make-post.component.html',
  styleUrls: ['./make-post.component.css']
})
export class MakePostComponent implements OnInit {

  categories = [
    {value: 'eateries', viewValue: 'Eateries'},
    {value: 'studyspots', viewValue: 'Study Spots'},
    {value: 'facilities', viewValue: 'Facilities'},
    {value: 'scenicviews', viewValue: 'Scenic Views'},
    {value: 'hiddengems', viewValue: 'Hidden Gems'}
  ]
    
  imgFile!: File;
  url = '';

  postForm = new FormGroup({
    category: new FormControl('', [Validators.required]),
    comment: new FormControl('', [Validators.required]),
  })

  constructor(
    private firestore: Firestore,
    private postsService: PostsService,
    private toast: HotToastService,
    private uploadService: UploadService
    ) { }

  ngOnInit(): void {
  }  

  onFileChange(event: any): void {
    this.imgFile = event.target.files[0];

    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.url = event.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);
    
  }

  savePost() {
    if (!this.postForm.valid) {
      return;
    }
    
    console.log('1');
    const postData = this.postForm.value;
    this.postsService
      .addPost(postData, this.imgFile)
      .pipe(
        this.toast.observe({
          loading: 'Making post...',
          success: 'Post made successfully',
          error: 'There was an error in making the post'
        })
      )
      .subscribe();
      this.postForm.reset();
      this.url = '';

  }



}
