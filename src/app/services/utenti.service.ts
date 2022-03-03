import { Injectable } from '@angular/core';  // ce già per default
import { UtentiInterface } from '../interfaces/utenti';

@Injectable({  // ce già per default 
  providedIn: 'root'
})
export class UtentiService {


 utentesingolo : UtentiInterface

 indice_update = -1;


 utentiuser: UtentiInterface[] = [
   /*
    {
      id: 1,
      macrosezione: 'dafault macrosezione',
      paragrafo: 'default paragrafo ',
      testo: 'testo di base '
 
    },
    {
      id: 2,
      macrosezione: 'dafault macrosezione',
      paragrafo: 'default paragrafo ',
      testo: 'testo di base '
 
    },
    */
  ];

  constructor() { }

  
  getUtentiUsers() {
  
    return this.utentiuser ;
  }
  
  getsingleiUsers(index : number) {
  
    var index_singleUtente =  this.utentiuser.findIndex(x => x.id === index);
    return this.utentiuser[index_singleUtente];
  }

  getNumberUsers()
  {
    return this.utentiuser.length;
  }

  getIndexUpdate()
  {

    return this.indice_update;
  }

  setindiceUpdate(indc : number){

   this.indice_update = indc;    
  }


  deleteutentiUser(index : number)
  {
   var index_utentiUser =  this.utentiuser.findIndex(x => x.id === index);
   if (index_utentiUser > -1)
   {
    this.utentiuser.splice(index_utentiUser,1);
   }
   else 
   {
     "index not valid check the table"
   }
    
  }

  
  updateutentiUser(index : number,macro : string, para : string, testo : string )
  {
   var index_utentiUser =  this.utentiuser.findIndex(x => x.id === index);

   if (index_utentiUser > -1)
   {
    this.utentiuser[index_utentiUser].macrosezione  = macro;
    this.utentiuser[index_utentiUser].paragrafo     = para;
    this.utentiuser[index_utentiUser].testo         = testo;
   }
   else 
   {
     "index not valid check the table";
   }
    
  }

  createVoid() {
    this.utentesingolo = {
      id: 12,
      macrosezione: 'dafault macrosezione',
      paragrafo: 'default paragrafo ',
      testo: 'testo di base ',
      dettagli: {
        eta : 0,
        provenienza: "NN",
        altezza : 0
                }
    
     } 
     this.utentesingolo.id =  this.utentiuser.length + 1; 
     this.utentesingolo.macrosezione = "";
     this.utentesingolo.paragrafo    = "s";
     this.utentesingolo.testo       =  "ds";
     
     this.utentiuser.push(this.utentesingolo);
  }



  allValue(macro : string)
  {

    
  }


  createUtente(macro : string, para : string, testo : string ) {
    this.utentesingolo = {
      id: 0,
      macrosezione:"default macrosezuione",
      paragrafo: 'default paragrafo ',
      testo: 'testo di base ',
      dettagli: {
        eta : 0,
        provenienza: "NN",
        altezza : 0
                }
    
     }

     this.utentesingolo.id =           this.utentiuser.length + 1; 
     this.utentesingolo.macrosezione = macro;
     this.utentesingolo.paragrafo    = para;
     this.utentesingolo.testo       =  testo;

     this.utentiuser.push(this.utentesingolo);

  }
  



}
