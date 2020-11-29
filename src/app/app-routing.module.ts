import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent } from './patients/patients.component'; import { PatientComponent } from './patient/patient.component';

const routes: Routes = [

  {
    path:'', component: PatientsComponent
  }, 
  { 
    path: 'patients', component: PatientsComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
