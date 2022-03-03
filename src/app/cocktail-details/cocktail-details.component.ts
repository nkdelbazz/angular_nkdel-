import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {

 id  = 0;
  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
      this.activedRoute.params.subscribe(
        (params: Params) => {
          this.id = +params["id"];
          console.log(params);
          alert(this.id);
        }
      );}

}
