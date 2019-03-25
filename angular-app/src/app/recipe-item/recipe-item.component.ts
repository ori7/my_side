import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe;
  @Output() deliteRecipe: EventEmitter<number> = new EventEmitter<number>();

  constructor(private router: Router) { }

  ngOnInit() {

  }
  

  update(recipe) {
    this.router.navigate(['updateRecipe',recipe.id]);
  }

  delite() {
    this.deliteRecipe.emit(this.recipe.id);
  }

}
