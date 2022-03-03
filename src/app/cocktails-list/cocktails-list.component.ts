import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Cocktail } from '../interfaces/cocktail.model';
import { CocktailService } from '../services/cokctail.service';
import { IAlbum } from '../interfaces/iaalbum';
import { Role } from '../progetto-rxjs/models/model/role';
import { User } from '../progetto-rxjs/models/model/user';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';


export interface Member {
  id: number;
  name: string;
  roleName: string;
}






interface CocktailDbDrink {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strInstructions: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strGlass: string;

  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strImageSource: string;
  strImageAttribution:string;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
}


interface IFDEFPROMISE {
  userid: number
  id: number,
  title: string,
  TT: boolean
}


@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})



export class CocktailsListComponent implements OnInit {




  cokctails$: Observable<Cocktail[]> | undefined; // serve per richiamare l observable di tipo cocktail 
  album$: Observable<IAlbum[]>  | undefined 

  // serve per richiamare l observable di tipo cocktail 
  // serve per richiamare l observable di tipo cocktail 


  public allAlbum = []  as any;
  public allCocktails = Object as any;
  public allcockt = Object as any;
  public TOTO = [] as any;
  public single =  [] as  any;
  public value =  [] as  any;
  public aaaa = [] as any;
  public www = Object as any;
  public val : CocktailDbDrink[];
  public singleValue : CocktailDbDrink;
  public vastr = "";
  members: Member[];
  usersdata : User[];

  proOBJ :IFDEFPROMISE[];
  prosingle :IFDEFPROMISE;
  prosingle1 :IFDEFPROMISE;
  public ciao = "hi";
  public drinkSelected = "ss";

  public new = Object as any;
  users$: Observable<User[]>;
  errMessCocktail : string;


 // serve per richiamare l observable di tipo cocktail 
  // serve per richiamare l observable di tipo cocktail 
  constructor(private cocktailService : CocktailService , private http: HttpClient ) { }

  ngOnInit() 
  {


    this.cocktailService.getAllCocktailsAPI().subscribe(data => this.allCocktails = data, errmess => this.errMessCocktail = <any>errmess);


    console.log(this.errMessCocktail);
      /*
      {
       this.allCocktails = data,
       errmess => this.errMessCocktail = <any>errmess;

       console.log(console.error());
       


      // this.val = this.allcockt.drinks[0].idDrink;
    
       this.val = this.allCocktails.drinks;
       console.log(this.val);
       
      });

      */











    this.cocktailService.getPRODish(1)
    .then(data => this.prosingle = data).catch((error) => {
      console.error(error);
    });


    this.cocktailService.getPRODishes()
    .then(data => this.proOBJ = data);

    this.cocktailService.getPROFeaturedDish()
    .then(data => this.prosingle1 = data);



       this.drinkSelected = this.cocktailService.drinkSelected;
      this.cocktailService.getAllAlbums()
      .subscribe(data => this.allAlbum = data);




          this.cocktailService.getById("11007").subscribe(data =>
            {
            this.value = data;
            });
         

          this.cocktailService.getDishIds().subscribe(data =>
          {
          this.TOTO = data, errmess => this.errMessCocktail = <any>errmess;
          console.log(this.errMessCocktail);
       //   console.log(this.TOTO);
          });



          this.cocktailService.getSingleID().subscribe(data =>
          {
          this.single = data;
          });



          this.cocktailService.Agetcoctail().subscribe(data =>
            {
            this.www = data;
            console.log(this.www);
            });
  


          forkJoin([
           this.http.get<Role[]>('http://localhost:3000/roles'),
           this.http.get<User[]>('http://localhost:3000/users'),
    
        ])
          .pipe(
            map((result) => result )
          )
        .subscribe(result => console.log(result));


         // serve per unire due valori in uno solo molto utile per filtrare dei dati cosi da restituire quello che serve 

        forkJoin([
        this.http.get<User[]>('http://localhost:3000/users'),
        this.http.get<Role[]>('http://localhost:3000/roles'),
        ])
          .pipe(
            delay(1000),
            map((result) => result[0].map(u => ({
                id: u.id,
                name: u.name,
                roleName: result[1].find(r => r.id === u.roleId).roleName
              })
            ))
          )
          .subscribe(result => this.members = result);



// forkjoin personale : 


          forkJoin([
            this.http.get<User[]>('http://localhost:3000/users'),
            this.http.get<Role[]>('http://localhost:3000/roles'),
            ])
              .pipe(
                delay(1000),
                map((result) => result[0])
                )
              .subscribe(result => this.usersdata = result);
            // observable 



// forkjoin personale :


       this.users$ = this.http.get<User[]>('http://localhost:3000/users');



       forkJoin([
        this.http.get<User[]>('http://localhost:3000/users'),
        this.http.get<Role[]>('http://localhost:3000/roles'),
        ])
          .pipe(
            delay(1000),
            map((result) => result[0].map(u => ({
                id: u.id,
                name: u.name,
                roleName: result[1].find(r => r.id === u.roleId).roleName
              })
            ))
          )
          .subscribe(result => this.members = result);
            // observable 
       this.users$ = this.http.get<User[]>('http://localhost:3000/users');
      










      }




      
      



getID(id : string)
{
   
  console.log(this.members);
   console.log(id);

   console.log(

    this.singleValue = 
    this.val.find(element => {

    return element.idDrink === id;
    
  })

   );
 console.log(this.singleValue);
}




}


  


