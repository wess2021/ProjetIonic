import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Material } from '../model/material';

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {

  base_path ='http://localhost:3000/materials';
  constructor(private http: HttpClient) { }
  //http options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
}
//create a new item
createMaterial(item): Observable<Material>{
  return this.http
  .post<Material>(this.base_path, JSON.stringify(item), this.httpOptions)
}
//get single student data
getMaterial(id): Observable<Material>{
  return this.http
  .get<Material>(this.base_path + '/' + id , this.httpOptions)
}
//get student data
getMaterials(): Observable<Material>{
  return this.http
  .get<Material>( this.base_path)
}
//update item by id
updateMaterial(id, item): Observable<Material>{
  return this.http
  .put<Material>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
}
//delete item by id
deleteMaterial(id): Observable<Material>{
  return this.http
  .delete<Material>(this.base_path + '/' + id, this.httpOptions)
}

}
