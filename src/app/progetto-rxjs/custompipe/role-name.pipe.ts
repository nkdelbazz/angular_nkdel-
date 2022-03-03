import { Pipe, PipeTransform } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, switchMap, delay } from 'rxjs/operators';
import { Role } from '../models/model/role';
import { HttpClient } from '@angular/common/http';

@Pipe({
  name: 'roleName'
})
export class RoleNamePipe implements PipeTransform {
  
constructor(private http : HttpClient) {}

  transform(roleId: number, index: number = 0): Observable<string> {  // li passo l indice 
    return timer(500 * index)   // posticipa l elemento di un valore cosi da far scansionare le chiamate molto più lentametne 
      .pipe(
        delay(1000), // il delay di 1000 tra un valore e l altro 
        switchMap(() => this.http.get<Role>('http://localhost:3000/roles/' + roleId)),   // recupero dei dati 
        map(user => user.roleName)
      );
  }

}
