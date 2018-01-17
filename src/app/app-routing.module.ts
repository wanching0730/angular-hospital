import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: 'app/main/main.module#MainModule'},
  {path: 'page', loadChildren: 'app/login/login.module#LoginModule'}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })

export class AppRoutingModule { }
