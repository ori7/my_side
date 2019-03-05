import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe;
  @Output() deliteRecipe: EventEmitter<string> = new EventEmitter<string>();
  @Output() updateRecipe: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  update(recipe) {console.log(name);
    this.router.navigate(['updateRecipe',recipe.name, {instructions: recipe.instructions} ]);
    //this.updateRecipe.emit(this.recipe.name);
  }

  delite() {
    this.deliteRecipe.emit(this.recipe.name);
  }

}
