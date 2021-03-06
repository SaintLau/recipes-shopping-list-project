import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Only a test', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dinner-ideas-dinner-recipes-fettuccine-alfredo-1628176963.jpg?crop=1xw:1xh;center,top&resize=980:*')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
