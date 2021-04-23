import { Employe } from './../model/employe';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {
  //api path
  base_path ='http://localhost:3000/employes';
  constructor(private http: HttpClient) { }
  //http options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
}
//create a new item
createEmploye(item): Observable<Employe>{
  return this.http
  .post<Employe>(this.base_path, JSON.stringify(item), this.httpOptions)
}
//get single student data
getEmploye(id): Observable<Employe>{
  return this.http
  .get<Employe>(this.base_path + '/' + id , this.httpOptions)
}
//get student data
getEmployes(): Observable<Employe>{
  return this.http
  .get<Employe>( this.base_path)
}
//update item by id
updateEmploye(id, item): Observable<Employe>{
  return this.http
  .put<Employe>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
}
//delete item by id
deleteEmploye(id): Observable<Employe>{
  return this.http
  .delete<Employe>(this.base_path + '/' + id, this.httpOptions)
}

}