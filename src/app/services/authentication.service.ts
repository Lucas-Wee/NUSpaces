import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, updateProfile, UserCredential } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { from, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = authState(this.auth);
  
  constructor(private auth: Auth) { }


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

}

