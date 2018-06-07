import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../shared/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes$: Observable<Recipe>[];
  recipes: Recipe[];
  constructor(private http: HttpClient) {  }

  search(search: string) {
    this.http.get<any[]>('https://api.punkapi.com/v2/beers?beer_name=' + search).subscribe( (data) => {
      this.recipes$ = data;
    });
  }

  getRecipes(): Observable<any[]> {
    return this.http.get<any[]>('https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6');
  }
}
