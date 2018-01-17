import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'appointment', loadChildren: 'app/appointment/appointment.module#AppointmentModule'},
  {path: 'page', loadChildren: 'app/doctor/doctor.module#DoctorModule'}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })

export class AppRoutingModule { }
