import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeModel } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';
import { environment } from 'src/environments/environment';
import { RecipeSocketService } from '../services/recipe-socket.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  recipe:RecipeModel;
  service;

  constructor(private activatedRoute: ActivatedRoute,
     private recipeService: RecipeService,
     private recipeSocketService: RecipeSocketService,
     private router: Router) {
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
    
    this.activatedRoute.params.subscribe(p =>{
      this.recipe.id = p["id"];
    })

    this.service.getById(this.recipe.id).subscribe(res =>{
      this.recipe.name = res[0]["name"];
      this.recipe.instructions = res[0]["instructions"]  //.replace(',', '\n');
    })
  }

  updateRecipe(){
    
    this.service.update(this.recipe).subscribe(res => {
      alert('The recipe updated successfully!');
    });
    this.router.navigate(['recipes']);
  }

}
