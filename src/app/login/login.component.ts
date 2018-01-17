import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import {FirebaseUISignInSuccess} from 'firebaseui-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(private afAuth: AngularFireAuth) {
  }

  // constructor(private formBuilder: FormBuilder, private authService: AuthService) {
  //   this.form = this.formBuilder.group({
  //     email: ['', Validators.required],
  //     password: ['', Validators.required]
  //   });
  // }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(d => console.log(d));
    
  }

  // loginWithGoogle(){
  //   this.authService.loginWithGoogle();
  // }

  // login(){
  //   const inputValue = this.form.value;
  //   console.log(inputValue.email, inputValue.password);

  //   this.authService.login(inputValue.email, inputValue.pass)
  //   .subscribe(
  //     error => alert(error)
  //   );
  // }

  // signUp(){
  //   const inputValue = this.form.value;
  //   this.authService.emailSignUp(inputValue.email.toString.trim, inputValue.password);
  // }

  
  logout() {
    this.afAuth.auth.signOut();
  }

  successCallback(data: FirebaseUISignInSuccess) {
    console.log(data);
  }
  

}
