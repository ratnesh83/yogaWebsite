import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  filter = 'height';

  constructor(private http: HttpClient) { }

  getAllYoga(){
    return this.http.get('http://localhost:3000/api/auth/getallyoga');
  }

  getYoga(id){
    return this.http.get('http://localhost:3000/api/auth/getyoga/'+id);
  }

  setFilter(filter){
    this.filter = filter;
    // this.simpleObservable.publish();
  }

  getFilter(){
    return this.simpleObservable;
  }

  simpleObservable = new Observable((observer) => {    
    observer.next(this.filter);
    observer.complete()
})
// obs = Rx.Observable
//             .create(observer => observer.next(Date.now()))
//             .publish();

}
