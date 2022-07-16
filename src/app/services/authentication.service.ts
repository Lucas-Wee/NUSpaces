import { Injectable } from '@angular/core';
import { firebaseAppFactory } from '@angular/fire/app/app.module';
import { Auth, authState, createUserWithEmailAndPassword, 
  UserCredential } 
from '@angular/fire/auth';
import { sendPasswordResetEmail } from "firebase/auth"
import { signInWithEmailAndPassword } from '@firebase/auth';
import { from, Observable, switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = authState(this.auth);
  
  constructor(
    private auth: Auth,
    private router : Router
    ) { }

  signUp(email: string, password: string): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.auth, email, password))
    // .pipe(
    //   switchMap(({user}) => updateProfile(user, {displayName: name}));
    //   )
  }

  login(username: string, password:string){
    return from(signInWithEmailAndPassword(this.auth, username, password));
  }


  logout() {
    return from(this.auth.signOut());
  }

  forgotPassword(email : string) {
    return from (sendPasswordResetEmail(this.auth, email).then(() => {
      this.router.navigate(['/verify-email']);
    }, () => {
      alert('Something went wrong');
    }));
}

}

