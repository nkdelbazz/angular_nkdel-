import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { LoginReactiveFormComponent } from '../login-reactive-form/login-reactive-form.component';
import { AuthService } from '../auth/auth.service';
import { style } from '@angular/animations';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './../progetto-rxjs/models/model/user';
import { AuthjwtserviceService } from './../inteceptor/authjwtservice.service';





@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  //public value = "1";
  constructor(public dialog : MatDialog  , private authservice : AuthService,private http : HttpClient, private authjwt : AuthjwtserviceService ) { }


  message = " new message ";  
  user : any;
   username: string = "ciao";
  subscription: Subscription;
  valore_preso : String;
  errMess :string

  valoreUser : Object;


  ngOnInit(): void {
    this.subscription = this.authservice.getUsername()
      .subscribe(name => { console.log(name); this.username = name; });


     this.authservice.getInfo()
     .subscribe(dishes => this.valore_preso = dishes,
       errmess => this.errMess = <any>errmess);

       console.log("valore associato " + this.valore_preso);

  }



  openLoginForm(){
    alert("funziona");
    this.dialog.open(LoginComponent,{width : '500px',height: '450'});
  }

  openLOGREG(value : string)
  {
    alert(value);
    //this.message = value;
    this.authservice.seTnameaccess(value);
    this.dialog.open(LoginReactiveFormComponent,{width : '500px',height: '450'});
  }


  logout(){

    
    alert("logout");
    console.log('User logout: ', this.authservice.getUsername);  
  this.authservice.logOut();
  console.log('User logout: ', this.authservice.getUsername);
  window.location.reload();
}


logoutJWT(){

  alert("logout");
this.authjwt.logout();
window.location.reload();
}

onprotected()
{
  this.http.get<any>('http://localhost:3000/users/protected').subscribe(
    (response) => {
      if (response) {
        this.message = response.msg;
        this.user = response.user;
      }
    },

    (error) => {
      if (error.status === 401) {
        this.message = 'You are not authorized to visit this route.  No data is displayed.';
      }

      console.log(error);
    }, 

    () => {
      console.log('HTTP request done', this.message,this.user);
    }
  );


  this.http.get<any>('http://localhost:3000/users/userprotected').subscribe(
    (response) => {
      if (response) {
        this.message = response.msg;
        this.user = response.user;
      }
    },

    (error) => {
      if (error.status === 401) {
        this.message = 'You are not authorized to visit this route.  No data is displayed.';
      }

      console.log(error);
    }, 

    () => {
      console.log('HTTP request done', this.message,this.user);
    }
  );

}

}
