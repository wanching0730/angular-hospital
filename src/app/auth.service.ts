import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable"
import * as firebase from 'firebase/app'

@Injectable()
export class AuthService {

  public user: Observable<firebase.User>;
  authState: any = null;


  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
   }

   loginWithGoogle(){
     this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
   }

   login(email, password): Observable<any>{
     return Observable.fromPromise(
       this.afAuth.auth.signInWithEmailAndPassword(email, password)
     )

   }

    //// Email/Password Auth ////
  emailSignUp(email:string, password:string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
        
      })
      .catch(error => console.log(error));
  }
  

}

export class EmailPasswordCredentials {
  email: string;
  password: string;
}
