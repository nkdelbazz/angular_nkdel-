import {Injectable} from '@angular/core';
import {UserInterface} from '../interfaces/user';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { User } from './../classes/User';  // definizione di tipo user 
import { forkJoin } from 'rxjs';
import { get } from 'get-value';
import { ErrHandlingService } from './err-handling.service';
import { URLBACKEND } from '../shared/costant';
import { Alert } from 'selenium-webdriver';

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
  

    constructor(private http: HttpClient, private errorHandling : ErrHandlingService) { } 
    nameForm = "NULL";
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



    registerBackEND(body:any)
    {
      return this.http.post('https://localhost:3443/users/signup', body,{
        observe:'body'
      });
    }



  }

