import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllYoga(){
    return this.http.get('http://localhost:3000/api/auth/getallyoga');
  }

  getYoga(id){
    return this.http.get('http://localhost:3000/api/auth/getyoga/'+id);
  }


}
