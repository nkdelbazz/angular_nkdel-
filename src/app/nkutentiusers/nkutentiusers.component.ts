import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UtentiService } from '../services/utenti.service';
import { Utenti } from '../classes/Utenti';
import { UtentiInterface } from '../interfaces/utenti';
import { Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder,RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nkutentiusers',
  templateUrl: './nkutentiusers.component.html',
  styleUrls: ['./nkutentiusers.component.css']
})
export class NkutentiusersComponent implements OnInit {

  macroplaceholder = "cioaoooo";

// riferimento ai dati di input da cambiare in base all input richiesto 
  @ViewChild("macrosezione_n",{static: false})macrosezione_n: ElementRef;
  @ViewChild("paragrafo_n",{static: false})paragrafo_n: ElementRef;
  @ViewChild("testo",{static: false})testo: ElementRef;
// riferimento ai dati di input da cambiare in base all input richiesto 

///////////////////////////////////////////////////  
// data from nkmainf 

@Input() valore : number;  // è il valore che deve riceversi dal padre cioè 

///////////////////////////////////////////////////  

 showInsert = false;
  title = 'Utenti'; // titiolo 
  numero_utenti = 0;  // appoggio 
  utentiusers_appoggio: Utenti[] = [];

  // valorizzazione degli utenti 
  id_old : number; 
  macrosezione_old : string;
  paragrafo_old : string;
  testo_old : string;


  utentiusers_appoggio_id = 0;

  index = -1;  // indice dell array da aggiornare 
  indice_all = 0;


  // serve per il collegamento con il form 
  Formupdate : FormGroup;

  // serve per il collegamento con il form 


  constructor(
    private utentiservice : UtentiService,
    private router: Router,
    public fbinsert: FormBuilder)
    {
      this.Formupdate = fbinsert.group({

        "macrosezione_n" : [,Validators.required],
        "paragrafo_n" : [,Validators.required],
        "scrittura_n" : [,Validators.required],
      })
    }


  ngOnInit() {
    //alert( this.showInsert);
  // this.showInsert = false;
   this.utentiusers_appoggio = this.utentiservice.getUtentiUsers();
   this.numero_utenti = this.utentiusers_appoggio.length;
   this.indice_all = this.utentiservice.getNumberUsers();
  }


  delete(value : number)
  {
    this.utentiservice.deleteutentiUser(value);
  }



  preUpdate(value : number)
  {
    
  this.index = value;
  this.utentiservice.setindiceUpdate(this.index);
  var ind = this.utentiservice.getIndexUpdate(); 
  this.showInsert = true;
  //this.router.navigate(['nkdmainif/utentiusers/update']);
  this.router.navigate(['nkdmainif','utentiusers', 'update',ind]);
  
  }



  aggiornaDettagli()
  {

    alert("hi");
  }
 

  
  update()
  {
    // serve per vedere l insert accesa 
    //alert(this.testo_old);
    var indice =   this.index ;
    var macro =  this.Formupdate.controls["macrosezione_n"].value;
    var paragrafo = this.Formupdate.controls["paragrafo_n"].value;
    var testo =  this.Formupdate.controls["scrittura_n"].value;

     this.utentiservice.updateutentiUser(indice,macro,paragrafo,testo);
    //this.valorizzaparametri()
   // this.showInsert = !this.showInsert;
   this.showInsert = !this.showInsert;
   alert( this.showInsert);
    //alert(this.showInsert);

  }





}

