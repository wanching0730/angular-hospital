import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'

interface User {
  uid: string;
  email: string;
  contact_number: string;
  city: string;
}

@Injectable()
export class AuthService {

  public user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) { 
    this.user = afAuth.authState;
  }

  login(email, password): Observable<any> {
    return Observable.fromPromise(
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
    );
  }

  // emailSignUp(credentials: EmailPasswordCredentials): firebase.Promise<FirebaseAuthState> {
  //   return this.af.auth.createUser(credentials)
  //     .then(() => console.log("success"))
  //     .catch(error => console.log(error));
  // }

}
