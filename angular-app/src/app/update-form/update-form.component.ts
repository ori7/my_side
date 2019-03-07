import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeModel } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  recipe:RecipeModel;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) {
    this.recipe = <RecipeModel>{};
   }

  ngOnInit() {

    this.activatedRoute.params.subscribe(p =>{
      this.recipe.id = p["id"];
      this.recipe.name = p["name"];
      this.recipe.instructions = p["instructions"];
    })
  }

  updateRecipe(updateForm){console.log(updateForm);
    
    this.recipeService.update(this.recipe).subscribe(res => {
      alert(res["status"]);
    });
  }

}
