import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRecipesComponent } from './containers/list-recipes/list-recipes.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { SearchComponent } from './components/search/search.component';
import { MatCardModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [ListRecipesComponent, SearchComponent],
  declarations: [ListRecipesComponent, RecipeComponent, SearchComponent]
})
export class RecipesModule { }
