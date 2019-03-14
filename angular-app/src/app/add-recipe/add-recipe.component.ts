import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { RecipeModel } from '../models/recipe.model';
import { environment } from 'src/environments/environment';
import { RecipeSocketService } from '../services/recipe-socket.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  recipe: RecipeModel;
  service;

  constructor(private recipeService: RecipeService,
    private recipeSocketService: RecipeSocketService) {
    this.recipe = <RecipeModel>{};
  }

  ngOnInit() {

    switch (environment.service) {
      case 'httpServer':
        this.service = this.recipeService;
        break;
      case 'socket':
        this.service = this.recipeSocketService;
        break;
      default:
        this.service = this.recipeService;
    }
  }

  addRecipe() {
    this.service.addRecipe(this.recipe).subscribe(successRes => {
      if (successRes["status"])
        alert(successRes["status"]);
      else
        console.log(successRes.connected);
    }, errorRes => {
      console.log(errorRes);
      alert('failed');
    });
  }

}
