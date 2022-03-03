
import { ActivatedRoute, Router } from '@angular/router';
import { UtentiService } from '../services/utenti.service';
import { Utenti } from '../classes/Utenti';
import { Component, OnInit, ViewChild, ElementRef ,AfterViewInit,NgModule, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
@Component({
  selector: 'app-nkupdate',
  templateUrl: './nkupdate.component.html',
  styleUrls: ['./nkupdate.component.css']
})



export class NkupdateComponent implements OnInit,AfterViewInit  {


  @ViewChild("input_p",{static: false})input_p: ElementRef;
  @ViewChild("input_m",{static: false})input_m: ElementRef;
  @ViewChild("input_t",{static: false})input_t: ElementRef;


  
  formSezioneupdate : FormGroup;  // per la gestione del FORM


  private utente_attuale : Utenti;

  id_up : number;

  constructor(
    private utentiservice : UtentiService,
    private router: Router,         // serve per la gestione delle rotte 
    private route:ActivatedRoute,  // serve per le subscribe 
    private renderer: Renderer2
    ,public fb: FormBuilder  // serve per la gestione del form 
  ) 
  {
    this.formSezioneupdate = fb.group({

      "macrosezione" : ['',Validators.required],
      "paragrafo" : ['',Validators.required],
      "scrittura" : ['',Validators.required]
    })
   }

  ngOnInit() {
    this.route.params.subscribe(p => {
      var str1 =  this.router.url;  /// prendere l url
      const myArray = str1.split("/");
      this.id_up =  parseInt(myArray[4]);
     // if(Number.isInteger( this.id_up))
  // {
       this.utente_attuale = this.utentiservice.getsingleiUsers(this.id_up);
       this.ngAfterViewInit()
  // }
  });

  }


  update(ind : number){

    var macro =  this.formSezioneupdate.controls["macrosezione"].value;
    var paragrafo = this.formSezioneupdate.controls["paragrafo"].value;
    var testo =  this.formSezioneupdate.controls["scrittura"].value;
    alert(macro);
    this.utentiservice.updateutentiUser(ind,macro,paragrafo,testo);
    this.router.navigate(['nkdmainif','utentiusers']);
  {
   }
  }

   ngAfterViewInit()
   {
    this.input_m.nativeElement.value =  this.utente_attuale.macrosezione;
    this.input_p.nativeElement.value = this.utente_attuale.paragrafo;
    this.input_t.nativeElement.value = this.utente_attuale.testo;
   }



   
}



