import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { Subscription } from 'rxjs';
import { AuthGuardService } from '../auth/auth-guard.service';
import { AuthService } from '../auth/auth.service';
import { const1 } from '../shared/costant';


interface user_inf {
  username : string;
  token: string;
  admin: boolean;
  roles: string;
}

interface jwt_ {
  username: string;
  token: string;
}

declare var $: any;


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})





export class NavComponent implements OnInit {  // dai da valorizzare i valori implementatno OnInit 
  @Output() onNewUser = new EventEmitter();  // viene emesso al componente padre 
   showmenu = false;
   isCollapsed = false;
   show = false;
   username: string = null;
   usernameCheck : string = null;
   subscription: Subscription;
   CheckUsername : boolean ;
   usernameValue : string;
   value : jwt_;
   user_info : user_inf;
   tokenKey = 'JWT';

   valore: string = " testa dadas";



   @ViewChild("colorchange",{static: false})colorchange: ElementRef;

  constructor(private authservice : AuthService, private authguardService : AuthGuardService) {
  }

  ngOnInit() {

    console.log(localStorage);

    console.log(localStorage.getItem('JWT'));
     const credentials = JSON.parse(localStorage.getItem(this.tokenKey));
     this.user_info = credentials;
     console.log( this.user_info.roles);


    
     this.valore =  "ROLES :" + this.user_info.roles + "    ADMIN : " + 
     this.user_info.admin; 
     var valore = this.valore;
     console.log("valore " + this.valore);

     var plant = document.getElementById('pop_nic');
     plant.setAttribute('data-content',valore);



  $(function () {
   // var plant = document.getElementById('pop_nic');
    $('[data-toggle="popover"]').popover();
  });
  


   this.subscription = this.authservice.getUsername()
     .subscribe(name => { console.log(name); this.username = name; });


     console.log( "controllo " );
     this.value = JSON.parse(localStorage.getItem('JWT'));
     console.log(this.value.username);
     console.log(localStorage);
     this.usernameValue = this.value.username;
   //  console.log(this.value);
     

     if(localStorage.getItem('JWT'))
      {
        this.CheckUsername = true;
      }
      else
      {
        this.CheckUsername = false;
        $('#pop_nic').removeAttr('data-toggle');
      }

      console.log(this.CheckUsername);
  }

  newUser() {
    this.onNewUser.emit();
  }
  toggleaMenu(){
    this.showmenu = !this.showmenu;
  }
  over(value : string)
  {
  this.colorchange.nativeElement.style.color = value; 
  }


  changeClick()
  {
    this.show = !this.show;
  }

  logout(){
    alert("logout");
    console.log('User logout: ', this.authservice.getUsername);  
    this.authservice.logOut();
    console.log('User logout: ', this.authservice.getUsername);
    window.location.reload();
}

getinfoUser()
{

console.log(localStorage);

}










}
