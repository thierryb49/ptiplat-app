import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RecipesService } from '../../../core/recipes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  name: FormControl;
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.name = new FormControl('');

    this.name.valueChanges.subscribe((data) => {
    //   console.log(data);
      this.recipesService.search(data);
     });
  }

}
