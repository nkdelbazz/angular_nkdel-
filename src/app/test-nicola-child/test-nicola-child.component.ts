import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../progetto-rxjs/models/model/user';
import { Role } from './../progetto-rxjs/models/model/role';

@Component({
  selector: 'app-test-nicola-child',
  templateUrl: './test-nicola-child.component.html',
  styleUrls: ['./test-nicola-child.component.css']
})
export class TestNicolaChildComponent implements OnInit {

 // Role : Role;

 @Input() value: string | number ;

 @Input() loggedIn: boolean;
 
public nameW = 0;

  id  = 0;
  constructor(private activedRoute: ActivatedRoute ) 
  { 
  }

  ngOnInit() {

    alert("NICOLA : " + this.value);
    alert("logged in : " + this.loggedIn);
    

   // this.name = "ciaooooooo";

    console.log(this.value);

  /*
      this.activedRoute.params.subscribe(          
        (params: Params) => {                      
          this.id = +params["id"];                   
        //  alert(this.id);                           
        }                                            
      );                                  
  */                                       
    }
}
