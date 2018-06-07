import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../../core/recipes.service';
import { Observable, Subject } from 'rxjs';
import { Recipe } from '../../../shared/recipe.model';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {

  recipes: Recipe[];
  recipes$: Subject<Recipe[]>;
  constructor(private recipesService: RecipesService) {

  }

  ngOnInit() {
    this.recipesService.recipes$.subscribe((data) => {
      this.recipes = data;
    });
  }

}
