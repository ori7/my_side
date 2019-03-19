import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, of } from 'rxjs';
import { RecipeModel } from '../models/recipe.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeSocketService {

  constructor(private socket: Socket) { }

  get(): Observable<RecipeModel[]> {

    this.socket.emit("message");

    var resultArray = this.socket.fromEvent("message").pipe(map((res: RecipeModel[]) => {console.log(res);
      res.forEach(r => {
        r.instructions = String(r.instructions).split("\n");
        return r;
      });
      return res;
    }));
    return resultArray;
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
