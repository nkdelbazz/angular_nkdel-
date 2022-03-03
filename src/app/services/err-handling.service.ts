import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrHandlingService {

  constructor() { }

  public handleError(error: HttpErrorResponse | any) {
    let errMsg: string;

    if (error.error instanceof ErrorEvent) {    // mi sta dicendo se è un errore gestito dall applicazione 
      errMsg = error.error.message;
    } else {
      errMsg = `${error.status} - ${error.statusText || ''} ${error.error}`;  // se è un errore del server 
    }

    return throwError(errMsg);   // ritornami l errore 
  }
}
