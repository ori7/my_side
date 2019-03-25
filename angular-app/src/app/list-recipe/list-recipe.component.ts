import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { RecipeSocketService } from '../services/recipe-socket.service';
import { environment } from 'src/environments/environment';
import { RecipeModel } from '../models/recipe.model';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})
export class ListRecipeComponent implements OnInit {

  recipes: RecipeModel[];
  service;

  constructor(private recipeService: RecipeService,
    private recipeSocketService: RecipeSocketService) {

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

    this.service.get().subscribe(successRes => {
      
      this.recipes = successRes;
    }, errorRes => {
      alert('failed');
    });
  };

  deleteRecipe(id: number) {
    this.service.delite(id).subscribe(res => {
      alert('The recipe delited successfully!');
    });
    /*
    const index = this.recipes.findIndex(x => x.id === id);
    this.recipes.splice(index, 1);
    */
  };

}
