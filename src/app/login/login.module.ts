import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {FirebaseUIModule} from 'firebaseui-angular';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: LoginComponent},
];


@NgModule({
  imports: [
    CommonModule,
    FirebaseUIModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent]
})
export class LoginModule {
}
