import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { RecipeModel } from '../models/recipe.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  recipe: RecipeModel;

  constructor(private recipeService: RecipeService) { 
    this.recipe = <RecipeModel>{};
  }

  ngOnInit() {
  }

  addRecipe(){
    this.recipeService.addRecipe(this.recipe).subscribe(successRes => {
      alert(successRes["status"]);
    }, errorRes => {
      console.log(errorRes);
      alert('failed');
    });
  }

}
