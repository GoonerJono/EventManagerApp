import { AppointmentDetails } from './../../modules/Appointment/appointmentDetails.module';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Appointment } from 'src/app/modules/Appointment/appointment.module';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': 'POST'})
};

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

    apiurl = 'http://dynamicprogrammers.co.za/asp/api/Appointment/';
    apiurlTest = 'https://localhost:44346/api/Appointment/';


  constructor(private htpp: HttpClient) { }

  GetAppointmentByUserId(id: number): Observable<Appointment[]> {
    return this.htpp.get<Appointment[]>(this.apiurl + 'GetAppointmentsUserId/' + id);
  }

  CreateNewAppointment(appointment: Appointment): Observable<number> {
    return this.htpp.post<number>(this.apiurl + 'CreateNewAppointment/', appointment, httpOptions);
  }

  GetAppointmentByAppointmentId(id: number): Observable<Appointment> {
    return this.htpp.get<Appointment>(this.apiurl + 'GetAppointment/' + id);
  }

  GetAppointmentDetails(id: number): Observable<AppointmentDetails> {
    return this.htpp.get<AppointmentDetails>(this.apiurl + 'GetAppointmentDetails/' + id);
  }

  GetRejectedAppointmentByUserId(id: number): Observable<AppointmentDetails[]> {
    return this.htpp.get<AppointmentDetails[]>(this.apiurl + 'GetRejectedAppointmentByUserId/' + id);
  }

  RequestAppointmentCancellation(id: number): Observable<number> {
    return this.htpp.get<number>(this.apiurl + 'RequestAppointmentCancellation/' + id);
  }
}
