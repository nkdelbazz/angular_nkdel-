import { Component, OnInit } from '@angular/core';
import { Utenti } from '../classes/Utenti';
import { UtentiService } from '../services/utenti.service';

@Component({
  selector: 'app-dropdownuser',
  templateUrl: './dropdownuser.component.html',
  styleUrls: ['./dropdownuser.component.css']
})
export class DropdownuserComponent implements OnInit {
  utentiusers_appoggio: Utenti[] = [];
  allshow = false;
  idshow = false;
  idappoggio = -1;

  constructor(   private utentiservice : UtentiService,) { }

  ngOnInit() {
    this.utentiservice.createVoid()
    this.utentiservice.createVoid()
    this.utentiservice.createVoid()
    this.utentiusers_appoggio = this.utentiservice.getUtentiUsers();
  }

  changeClick(v : string)
  {
     if ( v == "all")
     {
      this.allshow = !this.allshow;
     }
  
  }

  dettagli(n : number)
  {
    this.idappoggio = n ;
    this.idshow = !this.idshow;
  }

}
