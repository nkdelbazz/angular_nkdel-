import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../progetto-rxjs/models/model/user';
import { ErrHandlingService } from './err-handling.service';

@Injectable({
  providedIn: 'root'
})
export class CorsService {

  constructor(private http: HttpClient, private errorHandling : ErrHandlingService) { } 


// all data 
  urlAllusers: string =
  "http://localhost:3000/users";

  getallusers(): Observable<User[]> {
    return this.http.get<User []>(this.urlAllusers).pipe(catchError(this.errorHandling.handleError));
}


// data by id 
 id = "1";

 getUserByID() : Observable<User> {
  return this.http.get<User>(this.urlAllusers + '/' + this.id ).pipe(catchError(this.errorHandling.handleError));
}

// update data 

putUser(user: User): Observable<User> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  return this.http.put<User>(this.urlAllusers +'/' + this.id, user, httpOptions)
    .pipe(catchError(this.errorHandling.handleError));

}


pushUser(user: User): Observable<User> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  return this.http.post<User>(this.urlAllusers, user, httpOptions)
    .pipe(catchError(this.errorHandling.handleError));

}


}
