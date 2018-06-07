import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../shared/recipe.model';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))])
  ]
})
export class RecipeComponent implements OnInit {

  bounce: any;
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
