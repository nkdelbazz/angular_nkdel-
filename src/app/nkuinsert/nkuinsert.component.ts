import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Utenti } from '../classes/Utenti';
import { UtentiService } from '../services/utenti.service';

@Component({
  selector: 'app-nkuinsert',
  templateUrl: './nkuinsert.component.html',
  styleUrls: ['./nkuinsert.component.css']
})
export class NkuinsertComponent implements OnInit {


  @ViewChild("input_p",{static: false})input_p: ElementRef;
  @ViewChild("input_m",{static: false})input_m: ElementRef;
  @ViewChild("input_t",{static: false})input_t: ElementRef;


  
  formSezioneinsert : FormGroup;  // per la gestione del FORM


  private utente_attuale : Utenti;

  id_number_users : number;

  constructor(
    private utentiservice : UtentiService,
    private router: Router,         // serve per la gestione delle rotte 
    private route:ActivatedRoute,  // serve per le subscribe 
    private renderer: Renderer2
    ,public fb: FormBuilder  // serve per la gestione del form 
  ) 
  {
    this.formSezioneinsert = fb.group({

      "macrosezione" : ['',Validators.required],
      "paragrafo" : ['',Validators.required],
      "scrittura" : ['',Validators.required]
    })
   }

  ngOnInit() {
    this.route.params.subscribe(p => {
    this.id_number_users = this.utentiservice.getNumberUsers();
       this.ngAfterViewInit()
 
  });

  }


  insert(){

    var macro =  this.formSezioneinsert.controls["macrosezione"].value;
    var paragrafo = this.formSezioneinsert.controls["paragrafo"].value;
    var testo =  this.formSezioneinsert.controls["scrittura"].value;
    alert(macro);
    this.utentiservice.createUtente(macro, paragrafo, testo)
    this.router.navigate(['nkdmainif','utentiusers']);
  {
   }
  }

   ngAfterViewInit()
   {
    this.input_m.nativeElement.placeholder =  "inserire valore nuovo";
    this.input_p.nativeElement.placeholder =  "inserire valore nuovo";
    this.input_t.nativeElement.placeholder =  "inserire valore nuovo";
   }
}
