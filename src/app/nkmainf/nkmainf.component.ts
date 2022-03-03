import { Component, OnInit, ViewChild, ElementRef ,AfterViewInit,NgModule, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { url } from 'inspector';
import { UtentiService } from './../services/utenti.service';
import { UtentiInterface } from './../interfaces/utenti';

@Component({
  selector: 'app-nkmainf',
  templateUrl: './nkmainf.component.html',
  styleUrls: ['./nkmainf.component.css']
})
export class NkmainfComponent implements OnInit {
  

// valore da passare al figlio per passarli i parametri   
  valorePadre = "DASDAS"

  // servono per andare a fare il controllo del DOM come su javascript per controllare i vari elememnti html 

 @ViewChild("imgH",{static: false})imgSelect: ElementRef;
 @ViewChild("navcolor",{static: false})navcolor: ElementRef;
 @ViewChild("insertText",{static: false})insertText: ElementRef;

  // servono per andare a fare il controllo del DOM come su javascript per controllare i vari elememnti html 
 



  // servono per andare a definire i vari form che devono passare i loro valori 

 macrosezione : FormControl = new FormControl('main');

 formSezione : FormGroup;

  // servono per andare a definire i vari form che devono passare i loro valori 


  
  constructor(

    private renderer: Renderer2
    ,public fb: FormBuilder
    ,private route: Router 
    , private utentiservice : UtentiService 
    )
    


    
    {


    this.formSezione = fb.group({

      "macrosezione" : ['',Validators.required],
      "paragrafo" : ['',Validators.required],
      "scrittura" : ['',Validators.required]
    })
    
   }
  idbodyImage = "main";
  sfondoImmmagine = "main";
  hidden = "hiddenghghg";

  show = false;



  ngOnInit() 
  {
    //this.vselectBackgroundimage("1");
    //this.selectBackgroundimage(this.macrosezione.value);
  }

   abc()
   {
   alert("a");
   }



   selectBackgroundimage(image: string) 
  {
  alert("sss");
  this.idbodyImage = image;
  this.ngAfterViewInit();
  this.sfondoImmmagine = image;
  alert(this.macrosezione.value);
  }


  changeClick()
  {
    this.show = !this.show;
  }



valorizzaform()
  {
  if (!this.formSezione.valid)
    {
    alert("no");
    return;
    }
  else
    {
    console.log("sdsad");
    console.log(
      this.formSezione.controls["macrosezione"].value,
      this.formSezione.controls["paragrafo"].value,
      this.formSezione.controls["scrittura"].value,
      );

// valorizzazione dei dati del form
     var macro =  this.formSezione.controls["macrosezione"].value;
     var paragrafo = this.formSezione.controls["paragrafo"].value;
     var testo =  this.formSezione.controls["scrittura"].value;

     alert(testo);
     this.utentiservice.createUtente(macro,paragrafo,testo);
     this.changeClick();
    // this.route.navigate(['/nkdmainif/utentiusers']);
  }
  }

  createUtentbuttom()
  {
   // this.utentiservice.createUtente("dasd","sdad","dsadas");
    this.utentiservice.createVoid();
   //alert("ok"); 

  }



  ngAfterViewInit()
  {


      if (this.idbodyImage == "uno")
        {
          this.imgSelect.nativeElement.style.color = "white"; 
          this.imgSelect.nativeElement.className = "uno";  
          this.navcolor.nativeElement.style.color = "#6610f2";    
          
        } 
        if (this.idbodyImage == "due")
        {
          this.imgSelect.nativeElement.style.color = "red";
          this.imgSelect.nativeElement.className = "due";  
          this.navcolor.nativeElement.style.color = "#DA70D6";   
        } 
        
        if (this.idbodyImage == "tre")
        {
          this.imgSelect.nativeElement.style.color = "blue";
          this.imgSelect.nativeElement.className = "tre";
          this.navcolor.nativeElement.style.color = "#191970";   
        }

        if (this.idbodyImage == "main")
        {
          this.imgSelect.nativeElement.style.color = "blue";
          this.imgSelect.nativeElement.className = "main";
          this.navcolor.nativeElement.style.color = "#F4A460";   
        }
  }

}
