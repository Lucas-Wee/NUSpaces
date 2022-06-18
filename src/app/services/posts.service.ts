import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore, query } from '@angular/fire/firestore';
import { UsersService } from './users.service';
import { Post } from 'app/data/Post';
import { Observable, take, map } from 'rxjs';
import { User } from '@angular/fire/auth';
import { addDoc } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  user$ = this.usersService.currentUserProfile$;

  get allPosts$(): Observable<Post[]> {
    const ref = collection(this.firestore, 'posts');
    const queryAll = query(ref);
    return collectionData(queryAll) as Observable<Post[]>;
  }

  constructor(private firestore: Firestore, private usersService: UsersService) { }

  addPost(post: Post): Observable<any> {
    const ref = collection(this.firestore, 'posts');
    return this.user$.pipe(
      take(1),
      map(user => addDoc(ref,
        {
          category: post.category,
          comment: post.comment,
          date: '01/01/2000',
          time: '00:00',
          userID: user?.uid,
          userName: user?.displayName,
        }))
    )
  }
}
