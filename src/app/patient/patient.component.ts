import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { PatientModel, HumanName } from '../models/PatientModel';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit, OnChanges {

  constructor(private service: DataserviceService) {

  }

  //Input parameter from patient list, which patient details should be displayed
  @Input()
  id: string;

  //Notify the parent View to refresh the list
  @Output()
  patientModified = new EventEmitter<boolean>();

  //Das Datenmodell für die Anzeige
  patient : PatientModel = null;

  ngOnInit(): void {
    this.getPatient();
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.getPatient();
  }

  //_____ Begin Methods to interact with Service _____
  getPatient() {
    this.service.getPatient(this.id)
      .subscribe((data: PatientModel) => {
        console.log(data);
        this.patient = data;
        
      }
      );
  }

  deletePatient() {
    this.service.deletePatient(this.patient.id)
      .subscribe(x => this.patientModified.emit(true));
  }

  updatePatient() {
    var newPatient :PatientModel = this.patient;
    this.service.updatePatient(newPatient)
      .subscribe(
        patient => {
          console.log("Patient updated");
          this.patient = patient
          this.patientModified.emit(false);
        }
      );
  }
  //_____ End Methods to interact with Service _____

}
