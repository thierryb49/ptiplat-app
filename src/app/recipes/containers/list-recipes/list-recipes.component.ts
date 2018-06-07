import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../../core/recipes.service';
import { Observable } from 'rxjs';
import { Recipe } from '../../../shared/recipe.model';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {

  recipes: any;
  recipes$: Observable<Recipe>[];
  constructor(private recipesService: RecipesService) {

  }

  ngOnInit() {
    // this.recipesService.recipes$.values().;

    /*this.recipesService.getRecipes().subscribe( (data) => {
      this.recipes = data;
    });*/
  }

}
