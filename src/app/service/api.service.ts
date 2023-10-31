import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }



  getPayorPlanList(obj: any): Observable<any> {
    return this.http.get(`http://192.168.10.178:7002/poclite/maintenance/getPayorPlanList?jsonObj=` + obj);
  }
}
