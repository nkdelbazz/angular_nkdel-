import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { IAlbum } from '../interfaces/iaalbum';
import { Role } from '../progetto-rxjs/models/model/role';
import { User } from '../progetto-rxjs/models/model/user';
import { CocktailService } from '../services/cokctail.service';
import { CorsService } from './../services/cors.service';





/*
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
*/


const ELEMENT_DATA: User[] = [];





@Component({
  selector: 'app-test-nicola',
  templateUrl: './test-nicola.component.html',
  styleUrls: ['./test-nicola.component.css']
})




export class TestNicolaComponent implements OnInit {
  



  public userLoggedIn = 1212;



  displayedColumns: string[] = ['id'];
  public dataSource : User[];

  public userselected : User ;
  public roleselected : Role;
  public valpre = 1123;

  public usersq = []  as any;
  users: User[];
  userByid : User;
  userNew : User;


  roles: Role[];
  public value: string = "passaggio";
  errMess : string;


  constructor(private cocktailService : CocktailService , private http: HttpClient , private CorsService : CorsService) { }

 

  ngOnInit() {



/*
2	
id	3
name	"Lorenzo"
description	"Maecenas egestas, ligula quis ultricies imperdiet, nulla sem interdum magna, eget faucibus sem elit ut dolor. Donec a diam lobortis, volutpat orci id, rhoncus risus. "
roleId	1002
*/






    
        this.getallusers().subscribe(data =>
          {
          this.users = data;
          this.dataSource =  this.users;
          });

/*
   this.CorsService.getallusers().subscribe(data =>
    {
    this.users = data;
    this.dataSource =  this.users;
    });

*/
    this.CorsService.getUserByID().subscribe(data =>
      {
      this.userByid = data;
      this.userNew = data;
      console.log(this.userByid);
      });




        this.getallroles().subscribe(data =>
          {
          this.roles = data;
          });
       
  }




  getuser()
  {
    /*
  console.log(this.users[0]);
  this.usersa = this.users;
  console.log(this.roles);

  */
  return this.users;
     
  }



selectedID(user : User)
{


///alert("hi");
this.userselected = user;
///alert(this.userselected.id)
this.roleselected = this.roles.find(r => r.id == this.userselected.roleId);
///alert(this.roleselected.id);
this.userLoggedIn = 11111;
}


getUserselected()
{
  this.userselected;
}

  url1: string =
  "http://localhost:3000/users";
 
    getallusers(): Observable<User[]> {
      return this.http.get<User []>(this.url1);

}


url2: string =
"http://localhost:3000/roles";

  getallroles(): Observable<Role[]> {
    return this.http.get<Role []>(this.url2);

}



putProve() {

console.log(this.userNew);

this.userNew.name = "admin";

console.log(this.userNew);

this.CorsService.putUser(this.userNew).subscribe(data =>
  {
  this.userByid = data;
  console.log(this.userByid);
  },
  errmess => { this.errMess = <any>errmess; });


}



pushProve() {

  console.log(this.userNew);
  
  this.userNew.name = "admin";
  this.userNew.id = 0;
  
  console.log(this.userNew);
  
  this.CorsService.pushUser(this.userNew).subscribe(data =>
    {
    this.userByid = data;
    console.log(this.userByid);
    },
    errmess => { this.errMess = <any>errmess; });
  
  
  }

}