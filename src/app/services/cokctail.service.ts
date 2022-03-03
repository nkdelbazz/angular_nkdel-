import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
//import { map, filter } from 'rxjs/operators';
import { Cocktail } from '../interfaces/cocktail.model';
import { map, filter, switchMap,tap, catchError } from 'rxjs/operators'; 
import { IAlbum } from './../interfaces/iaalbum';
import { ErrHandlingService } from './err-handling.service';
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

interface CocktailDbResult {
  drinks: Array<CocktailDbDrink>;   // mi sta dicendo di creare una interfaccia con lo schema in precedenza 
}


 interface IFDEFPROMISE {
  userid: number
  id: number,
  title: string,
  TT: boolean
}




const DEFPROMISE  = [
  {
    "userid": 1,
    "id": 1,
    "title": "quidem molestiae enim",
    "TT":false
  },
  {
    "userid": 1,
    "id": 2,
    "title": "sunt qui excepturi placeat culpa",
    "TT":false
  },
  {
    "userid": 1,
    "id": 3,
    "title": "omnis laborum odio",
    "TT":false
  },
  {
    "userid": 1,
    "id": 4,
    "title": "non esse culpa molestiae omnis sed optio",
    "TT":false
  },
  {
    "userid": 1,
    "id": 5,
    "title": "eaque aut omnis a",
    "TT":true
  }
]



@Injectable({
  providedIn: 'root'
})


export class CocktailService {

  static baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';   // la base per la ricerca dei nostri dati API 
  public arr = [] as any;
  value = "www";
//  arrv1 : Array<any> = [];
  drinkSelected = "hi";


  constructor(private http: HttpClient, private errorHandling : ErrHandlingService) { }   // per andae a filtrare i dati che mi servono 



  urlCocktails = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margaritaa';
  urlfakecokt = "fake";



  // gestione corretta degli errori 
  getAllCocktailsAPI()
  {
    return this.http.get(this.urlfakecokt).pipe(catchError(this.errorHandling.handleError));
  }






  albums_url: string =
  "https://jsonplaceholder.typicode.com/albums";

  fakeurl = "dsad";
 
    getAllAlbums(): Observable<IAlbum[]> {
      return this.http.get<IAlbum []>(this.albums_url).pipe(catchError(this.errorHandling.handleError));
      /*
        .pipe(
         // tap((data) => data)
          .map((res) => JSON.stringify(res))
                 // console.log('All: ' + JSON.stringify(data))  ) 
             
        );
        */
    }




       ///////////////////////////////////////////////////////
       // PROMISES INIZIO : 

       getPRODishes(): Promise<IFDEFPROMISE[]> {
        //return Promise.resolve(DEFPROMISE);
        return new Promise(resolve=> {
            setTimeout(() => resolve(DEFPROMISE), 2000);
          });

      }
    
      getPRODish(id: number): Promise<IFDEFPROMISE> {
       // return Promise.resolve(DEFPROMISE.filter((dish) => (dish.id === id))[0]);

        return new Promise(resolve=> {
          setTimeout(() => resolve(DEFPROMISE.filter((dish) => (dish.id === id))[0]), 2000);
        });
      }
    
      getPROFeaturedDish(): Promise<IFDEFPROMISE> {
       // return Promise.resolve(DEFPROMISE.filter((dish) => dish.TT)[0]);

        return new Promise(resolve=> {
          setTimeout(() => resolve(DEFPROMISE.filter((dish) => dish.TT)[0]), 2000);
        });
      }

      // PROMISES FINE : 
       ///////////////////////////////////////////////////////

// this.albums_url


    getDishIds(): Observable<string[] | any> {
      return this.http.get<IAlbum []>(this.fakeurl).pipe(map(dish => dish.map(data => data.id))).pipe(catchError(this.errorHandling.handleError));
    }




    getSingleID(): Observable<IAlbum | any> {
      return this.http.get<IAlbum []>(this.albums_url).pipe(map(data => data.filter(data => data.id === 27 )));
    }

   


    urlNick: string =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
 
    getcoctail(): Observable<string[][]> 
    {
      return this.http.get<CocktailDbResult[]>(this.urlNick).pipe(map(data => data.map(data =>data.drinks.map(data => data.idDrink))))
    }



    AurlNick: string =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
 
    Agetcoctail(): Observable<string[][]> 
    {
      return this.http.get<CocktailDbResult[]>(this.AurlNick).pipe(map(data => data.map(data =>data.drinks.map(data => data.idDrink))))
    }




    getById(id: string): Observable<Cocktail> {
      const url = `${CocktailService.baseUrl}/lookup.php?i=${id}`;
      return this.http.get(url)
        .pipe(
          map((drinks: Array<Cocktail>) => {
            if (!drinks.length) {
              throw new Error(`Cocktail with id ${id} not found.`);
            }
  
            return drinks[0];
     //       console.log(drinks[0]);
          })
        );

    






/*
        
  private mapResultToModel(cocktailDbResult: CocktailDbResult): Array<Cocktail> {
    const drinks = cocktailDbResult?.drinks || [];

    return drinks
      .map(drink => this.mapSingleDrinkToModel(drink))
      .filter(drink => !!drink); // remove null values
}


private mapSingleDrinkToModel(drink: CocktailDbDrink): Cocktail | null {
  if (!drink) {
    return;
  }


  */

  /*
    albums_url1: string =
    "https://jsonplaceholder.typicode.com/albums";
   
    getAllCocktails1()
    {
      return this.http.get(this.url_Cokctail);
    }



    
     url_Cokctail: string =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
 
    getAllCocktails(): Observable<CocktailDbDrink[]> 
    {
      return this.http.get<CocktailDbDrink[]>(this.url_Cokctail)
    }



      url_prova = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
      getTOTO () :Observable<string[]> 
      {
      return this.http.get<CocktailDbDrink[]>(this.url_prova).pipe(
        map(data => data.map(data => data.strDrinkThumb))
      )};


      
 

    getAllCocktailsAPI()
    {
      return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    }

*/
/*

    url_prova = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
    getFeaturedDish () 
      {
      return this.http.get<CocktailDbDrink[]>(this.url_prova).pipe(

        map(data => data[0].idDrink)


      )}
     // map(data => {})})
      
    // console.log (data[0].idDrink) 
        /*
      for(const id in data)
      {
        if (data.hasOwnProperty(id))
        {
       // this.arr.push(data[id].idDrink);
       // this.value = (data[id]).strDrink;

        }
      }

      */
/*
      for(const id in this.arr)
      {
        if (this.arr.hasOwnProperty(id))
        {
        this.arrv1.push(this.arr[id]);
        }
      }
      */
/*
      console.log(this.value);
      return this.value;

    
      }));
      }

  






  //listByFirstLetter(letter: string): Observable<Array<Cocktail>> {       // ci sarà un observable di tipo array con interface Cocktail 
  //listByFirstLetter(letter: string): Observable<Cocktail[]> {  
     listByFirstLetter(letter: string): any { 
    const url = `${CocktailService.baseUrl}/search.php?f=${letter}`;
    return this.http.get(url).pipe( map((res:any) => res.json())   );
    /*
    .pipe(
      map((res:any) => res.json())
    );

    */
  

    //.pipe(map());
   // .pipe(map((result: any) => this.mapResultToModel(result)));

  



  /*
  getById(id: string): Observable<Cocktail> {
    const url = `${CocktailService.baseUrl}/lookup.php?i=${id}`;
    return this.http.get(url)
      .pipe(
        map((result: CocktailDbResult) => this.mapResultToModel(result)),
        map((drinks: Array<Cocktail>) => {
          if (!drinks.length) {
            throw new Error(`Cocktail with id ${id} not found.`);
          }

          return drinks[0];
        })
      );
  }






  private mapResultToModel(cocktailDbResult: CocktailDbResult): Array<Cocktail> {
      const drinks = cocktailDbResult?.drinks || [];

      return drinks
        .map(drink => this.mapSingleDrinkToModel(drink))
        .filter(drink => !!drink); // remove null values
  }


  private mapSingleDrinkToModel(drink: CocktailDbDrink): Cocktail | null {
    if (!drink) {
      return;
    }

    */

    /*
    const ingredients = [
      drink.strIngredient1,
      drink.strIngredient2,
      drink.strIngredient3,
      drink.strIngredient4,
      drink.strIngredient5,
      drink.strIngredient6,
      drink.strIngredient7,
      drink.strIngredient8,
      drink.strIngredient9,
      drink.strIngredient10,
      drink.strIngredient11,
      drink.strIngredient12,
      drink.strIngredient13,
      drink.strIngredient14,
      drink.strIngredient15,
    ].filter((ingredient) => !!ingredient); // remove null values


  
    return {
      id: drink.idDrink,
      name: drink.strDrink,
      category: drink.strCategory,
      instructions: drink.strInstructions,
      alcoholic: drink.strAlcoholic,
      glass: drink.strGlass,
      imageUrl: drink.strDrinkThumb,
      ingredients,
    }; 

    */
  }  // */

}







