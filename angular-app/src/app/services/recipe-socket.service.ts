import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, of } from 'rxjs';
import { RecipeModel } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeSocketService {

  constructor(private socket: Socket) { }

  get(): Observable<RecipeModel[]> {

    return this.socket.fromEvent("message");
  }

  addRecipe(recipe: RecipeModel): Observable<object> {

    return of(this.socket.emit("add", recipe));
  }

  update(recipe: RecipeModel): Observable<object> {

    return of(this.socket.emit("update", recipe));
  };

  delite(id): Observable<object> {

    return of(this.socket.emit("delite", id));
  };
}
