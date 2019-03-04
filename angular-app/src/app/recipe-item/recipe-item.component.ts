import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe;
  @Output() deliteRecipe: EventEmitter<string> = new  EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  delite(){
    this.deliteRecipe.emit(this.recipe.name);
  }

}
