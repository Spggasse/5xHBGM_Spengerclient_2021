import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service' 
import { PatientModel } from '../models/PatientModel';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  constructor(private service: DataserviceService) { } 
  patientArr$: PatientModel[] = null; 
  ngOnInit() { 
    this.getPatient(); 
  } 
  getPatient() { 
    this.service.getPatients().subscribe((data: PatientModel[]) => { 
      console.log(data); 
      this.patientArr$ = data }); 
    } 
  selectPatient(selected: PatientModel){
    console.log("clicked Patient" + selected.id); 
  }

}
