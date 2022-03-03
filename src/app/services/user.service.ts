import {Injectable} from '@angular/core';
import {UserInterface} from '../interfaces/user';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { User } from './../classes/User';  // definizione di tipo user 
import { forkJoin } from 'rxjs';
import { get } from 'get-value';
interface UserResponse
{
  data:User[];
  message: string
}

@Injectable()

export class UserService {
  users: UserInterface[] = [
    /*
    {
      id: 1,
      name: 'Hidran1',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43

    },
    {
      id: 2,
      name: 'Hidran2',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43
    },
    {
      id: 3,
      name: 'Hidran3',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43
    },
    {
      id: 4,
      name: 'Hidran4',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43
    }
    */
  ];


  private APIURL = 'http://localhost:8000/users' ; // serve per dare il collegamento con il host di laravel 

  constructor(private http: HttpClient) {
  }

  getUsers() {
    // return this.users;                serve solo all interno di ANGULAR 
    //return this.http.get<UserResponse>(this.APIURL); // serve per il collegamento con questo host e quello di laravel 
    return this.http.get(this.APIURL).subscribe(
      data => console.log(data),
      error => alert(error.message)
    );
  }

  getUser(id: number) {
    return this.users.find(user => user.id === id);
  }

  deleteUser(user: UserInterface) {
    const index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }

  }

  updateUser(user: UserInterface) {
    const idx = this.users.findIndex((v) => v.id === user.id);
    alert(idx);
    if (idx !== -1) {
      this.users[idx] = user;
    }
  }


  createUser(user: UserInterface) {
    user.id = this.users.length + 1;
    this.users.splice(0, 0, user);

  }




}

