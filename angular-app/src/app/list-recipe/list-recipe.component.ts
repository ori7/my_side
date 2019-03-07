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
      this.recipes = successRes;   console.log(successRes);
    }, errorRes => {
      alert('failed');
    });;
  };

  deleteRecipe(id:number) {
    this.recipeService.delite(id).subscribe(res => {
      alert(res["status"]);
    });
    const index = this.recipes.findIndex(x => x.id === id);
    this.recipes.splice(index, 1);
  };

}
