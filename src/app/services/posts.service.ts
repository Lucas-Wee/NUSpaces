import { Injectable } from '@angular/core';
import { 
  arrayRemove,
  arrayUnion,
  collection, 
  collectionData, 
  doc, 
  Firestore, 
  orderBy, 
  query, 
  Timestamp, 
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { UsersService } from './users.service';
import { Post } from 'app/data/Post';
import { Observable, take, map, switchMap, from} from 'rxjs';
import { addDoc } from '@firebase/firestore';
import { UploadService } from './upload.service';
import { User } from 'app/data/User';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  user$ = this.usersService.currentUserProfile$;

  get allPosts$(): Observable<Post[]> {
    const ref = collection(this.firestore, 'posts');
    const queryAll = query(ref, orderBy('time', 'desc'));
    return collectionData(queryAll) as Observable<Post[]>;
  }

  postsByUser(uid: string | undefined): Observable<Post[]> {
    const ref = collection(this.firestore, 'posts');
    const queryPosts = query(ref, where('userID', '==', uid), orderBy('time', 'desc'));
    //console.log(queryPosts);
    return collectionData(queryPosts) as Observable<Post[]>;
  }

  favsByUser(uid: string | undefined): Observable<Post[]> {
    const ref = collection(this.firestore, 'posts');
    const queryPosts = query(ref, where("likes", "array-contains", uid), orderBy('time', 'desc'));
    //console.log(queryPosts);
    return collectionData(queryPosts) as Observable<Post[]>;
  }

  postsByCategory(category: string): Observable<Post[]> {
    const ref = collection(this.firestore, 'posts');
    const queryPosts = query(ref, where('category', '==', category), orderBy('time', 'desc'));
    return collectionData(queryPosts) as Observable<Post[]>;
  }

  constructor(
    private firestore: Firestore, 
    private usersService: UsersService,
    private uploadService: UploadService) { }

  addPost(post: Post, image: File): Observable<any> {
    const ref = collection(this.firestore, 'posts');
    const currTime = new Date();
    console.log(currTime.toDateString());
    
    return this.user$.pipe(
      take(1),
        map(user => 
          addDoc(ref,
            {
              category: post.category,
              comment: post.comment,
              time: currTime,
              userID: user?.uid,
              userName: user?.displayName,
              userAvatar: user?.photoURL,
              likes: new Array()
            }).then(docRef => 
              this.uploadService.uploadImage(image, `images/posts/${docRef.id}`)
              .pipe(
                switchMap((photoURL) => 
                  updateDoc(docRef, {
                    id: docRef.id, 
                    photoID: photoURL
                  })
                )
              )  
              .subscribe()
            ) 
        )
    )
  }

  likePost(postID: string): Observable<any> {
    const ref = doc(this.firestore, 'posts', postID);
    return this.user$.pipe(
      take(1),
      map(user =>
        updateDoc(ref, { likes: arrayUnion(user?.uid)})
      )
    )
  }

  unlikePost(postID: string): Observable<any> {
    const ref = doc(this.firestore, 'posts', postID);
    return this.user$.pipe(
      take(1),
      map(user =>
        updateDoc(ref, { likes: arrayRemove(user?.uid)})
      )
    )
  }
}
