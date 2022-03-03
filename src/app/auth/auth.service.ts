import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { URLBACKEND } from '../shared/costant';
import { Userlog } from './../interfaces/userlog';
import { Role } from './../progetto-rxjs/models/model/role';


interface AuthResponse {
  status: string;
  success: string;
  token: string;
  admin: boolean;
  roles: string;
}

interface JWTResponse {
  status: string;
  success: string;
  user: any;
}

export class Dish {
  _id: string;
  name: string;
  image: string;
  category: string;
  label: string;
  price: string;
  featured: boolean;
  description: string;
  comments: Comment[];
}


export class Comment {
  rating: number;
  comment: string;
  author: string;
  date: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenKey = 'JWT';
  isAuthenticated: Boolean = false;
  username: Subject<string> = new Subject<string>();
  authToken: string = undefined;

   constructor(private http: HttpClient,
     private processHTTPMsgService: ProcessHTTPMsgService) {
   }

   nameForm = "NULL";
    headers : any

   checkJWTtoken() {
     this.http.get<JWTResponse>(URLBACKEND + 'users/checkJWTtoken')
     .subscribe(res => {
       console.log('JWT Token Valid: ', res);
       this.sendUsername(res.user.username);
     },
     err => {
       console.log('JWT Token invalid: ', err);
       this.destroyUserCredentials();
     });
   }

   sendUsername(name: string) {
     this.username.next(name);
   }

   clearUsername() {
     this.username.next(undefined);
   }

   loadUserCredentials() {
     const credentials = JSON.parse(localStorage.getItem(this.tokenKey));
     console.log('loadUserCredentials ', credentials);
     if (credentials && credentials.username !== undefined) {
       this.useCredentials(credentials);
       if (this.authToken) {
        this.checkJWTtoken();
       }
     }
   }

   storeUserCredentials(credentials: any) {
     console.log('storeUserCredentials ', credentials);
     localStorage.setItem(this.tokenKey, JSON.stringify(credentials));
     this.useCredentials(credentials);
   }

   useCredentials(credentials: any) {
     this.isAuthenticated = true;
     this.sendUsername(credentials.username);
     this.authToken = credentials.token;
   }

   destroyUserCredentials() {
     this.authToken = undefined;
     this.clearUsername();
     this.isAuthenticated = false;
     localStorage.removeItem(this.tokenKey);
   }

   logIn(user: any): Observable<any> {
     return this.http.post<AuthResponse>(URLBACKEND + 'users/login',
       {'username': user.username, 'password': user.password})
       .pipe( map(res => {
           alert(res);
           this.storeUserCredentials({username: user.username, token: res.token, admin: res.admin, roles: res.roles});
           return {'success': true, 'username': user.username };
       }),
        catchError(error => this.processHTTPMsgService.handleError(error)));
   }

   logOut() {
     this.destroyUserCredentials();
   }

   isLoggedIn(): Boolean {
     return this.isAuthenticated;
   }

   getUsername(): Observable<string> {
     return this.username.asObservable();
   }

   getcontrolUsername()
   {
    return this.username;
   }

   getToken(): string {
     return this.authToken;
   }


   seTnameaccess(value : string) 
   {
        this.nameForm = value;
   }

   reTurnameacces()
   {   
       let temp = this.nameForm;
       this.nameForm = "null";
       return temp;
   }

   Register(user: any){
    return this.http.post(URLBACKEND + 'users/signup',
      {'username': user.username, 'password': user.password})
      .pipe( 
       catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getinfoUser():Observable<any> {
    
    const httpOptions = {
         headers: new HttpHeaders(
         { 
            'Authorization': JSON.parse(localStorage.getItem(this.tokenKey)),
            'Content-Type': 'application/json'
         })
     }
  
   return this.http.get(URLBACKEND + 'dishes/testAdmin', httpOptions);
    }



    getDishes(): Observable<Dish[]> {
      return this.http.get<Dish[]>(URLBACKEND + 'dishes')
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }
  


    getInfo(){

      return this.http.get<String>(URLBACKEND + 'dishes/testAdmin');

    }



}
