import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})
export class ListRecipeComponent implements OnInit {

  recipes;

  constructor(private recipeService: RecipeService) { 

  }

  ngOnInit() {

    this.recipeService.get().subscribe(successRes => {
      this.recipes = successRes;
    }, errorRes => {
      alert('failed');
    });;
  }

  deleteRecipe(name) {
    this.recipeService.delite(name).subscribe(res => {
      console.log(res);
    });
    const index = this.recipes.findIndex(x => x.name === name);
    this.recipes.splice(index, 1);
  }

}
